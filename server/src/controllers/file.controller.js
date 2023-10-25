const httpStatus = require('http-status');
const ErrorResponse = require('../utils/errorResponse');
const { uploadFile, deleteFile } = require('../utils/fileUtils');

// Controller for handling file upload
async function uploadFileController(req, res, next) {
    try {
        if (!req.file) return next(new ErrorResponse('No file uploaded', httpStatus.BAD_REQUEST));

        const { buffer, mimetype } = req.file;

        const result = await uploadFile(buffer, mimetype);

        return res.status(httpStatus.CREATED).json({
            success: true,
            data: {
                publicId: result.public_id,
                url: result.url,
                mimetype: result.mimeType
            }
        });
    } catch (error) {
        return next(error);
    }
}

// Controller for handling file deletion
async function deleteFileController(req, res, next) {
    try {
        const { publicId } = req.params;

        const result = await deleteFile(publicId);
        
        return res.status(httpStatus.OK).send({ success: true, message: result });
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    uploadFileController,
    deleteFileController
}