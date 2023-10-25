const express = require('express');
const { multerUpload } = require('../../utils/fileUtils')
const {
    uploadFileController,
    deleteFileController
} = require('../../controllers/file.controller')
const isAuthenticated = require('../../middlewares/auth.middleware');

const router = express.Router();

router.post('/', isAuthenticated, multerUpload.single('file'), uploadFileController);

router.delete('/delete/:publicId', isAuthenticated, deleteFileController);

module.exports = router;


/**
 * @swagger
 * tags:
 *   name: Files
 *   description: Endpoints for handling file upload and deletion
 */

/**
 * @swagger
 * /v1/uploads:
 *   post:
 *     summary: Upload a file
 *     tags: [Files]
 *     security:
 *       - googleAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: File uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     publicId:
 *                       type: string
 *                     url:
 *                       type: string
 *                     mimetype:
 *                       type: string
 *       400:
 *         description: Bad request or no file uploaded.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /v1/uploads/delete/{publicId}:
 *   delete:
 *     summary: Delete a file by public ID
 *     tags: [Files]
 *     security:
 *       - googleAuth: []
 *     parameters:
 *       - name: publicId
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: File deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
