const cloudinary = require('cloudinary').V2;
const streamifier = require('streamifier');
const multer = require('multer');
require('dotenv').config();
const FileModel = require('../models/file.model');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const multerUpload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, callback) => {
        const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png'];

        if (allowedMimeTypes.includes(file.mimetype)) {
            callback(null, true); 
        } else {
            callback(new Error('Invalid file type'));
        }
    }
});

const uploadFile = async (filePath, mimeType) => {
    try {
        const uploadStreamPromise = new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { resource_type: 'auto', use_filename: true },
                async (error, result) => {
                    if (error) {
                        reject(new Error('An error occurred while uploading the file to Cloudinary'));
                        return;
                    }

                    if (!result) {
                        reject(new Error('No upload result received from Cloudinary'));
                        return;
                    }

                    resolve(result);
                }
            );

            const readableStream = streamifier.createReadStream(filePath);

            readableStream.on('data', (chunk) => {
                if (!uploadStream.write(chunk)) {
                    readableStream.pause();
                }
            });

            uploadStream.on('drain', () => {
                readableStream.resume();
            });

            uploadStream.on('finish', () => {
                console.log('Upload finished successfully');
            });

            // Pipe the readable stream to the upload stream
            readableStream.pipe(uploadStream);
        });

        const result = await uploadStreamPromise;

        const fileData = {
            public_id: result.public_id,
            url: result.url,
            mimeType
        }

        await new FileModel({
            public_id: fileData.public_id,
            url: fileData.url,
            mimeType: fileData.mimeType
        });

        return fileData;

    } catch (error) {
        throw new Error('An error occurred while uploading the file to Cloudinary');
    }
}

const deleteFile = async (public_id) => {
    try {
        // Delete from Cloudinary
        const cloudinaryFileResult = await cloudinary.uploader.destroy(public_id);

        // Delete from Database
        const fileModelFileResult = await FileModel.deleteOne({ public_id });

        return { message: cloudinaryFileResult.result };

    } catch (error) {
        throw new Error('An error occurred while deleting the file');
    }
}

module.exports = { multerUpload, uploadFile, deleteFile };