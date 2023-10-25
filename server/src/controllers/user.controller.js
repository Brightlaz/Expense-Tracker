const httpStatus = require('http-status');
const z = require('zod');
const ErrorResponse = require('../utils/errorResponse');
const { ProfileModel } = require('../models/profiles.model');

const userUpdateSchema = z.object({
    fullName: z.string().optional(),
    avatar: z.string().optional(),
    phoneNumber: z.number().int().optional(),
    occupation: z.string().optional(),
    salary: z.number().int().optional(),
    saving: z.number().int().optional(),
    goal: z.number().int().optional(),
});

async function getAllUsers(req, res, next) {
    try {
        const limit = parseInt(req.query.limit, 10) || 10;

        const users = await ProfileModel.find({}, {
            limit: limit,
            select: ['googleId', 'fullName', 'avatar'],
            sort: { fullName: 'asc' },
        });

        if (users.rows.length === 0)
            return next(new ErrorResponse('Users not found', httpStatus.NOT_FOUND));

        res.status(httpStatus.OK).json({ success: true, data: users.rows });
    } catch (error) {
        next(error);
    }
}

async function getUserByID(req, res, next) {
    try {
        const userId = req.params.id;

        const user = await ProfileModel.findById(userId);

        if (!user) return next(new ErrorResponse('User not found', httpStatus.NOT_FOUND))

        res.status(httpStatus.OK).json({
            success: true,
            data: user.toObject(),
        });
    } catch (error) {
        next(error);
    }
}

async function updateUser(req, res, next) {
    try {
        const userId = req.params.id;
        const userData = userUpdateSchema.parse(req.body);

        const user = await ProfileModel.findById(userId);

        if (!user) return next(new ErrorResponse('User not found', httpStatus.NOT_FOUND))

        // Update the user document with the provided data.
        for (const [key, value] of Object.entries(userData)) {
            if (value !== undefined) {
                user[key] = value;
            }
        }

        // Save the updated user document back to the database.
        await user.save();

        res.status(httpStatus.OK).json({
            success: true,
            data: user.toObject()
        });
    } catch (error) {
        next(error);
    }
}

async function deleteUserByID(req, res, next) {
    try {
        const userId = req.params.id;

        const user = await ProfileModel.findById(userId);

        if (!user) return next(new ErrorResponse('User not found', httpStatus.NOT_FOUND))

        // Use the `remove` method to delete the user.
        await user.remove();

        res.status(httpStatus.OK).json({
            success: true,
            data: null,
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllUsers,
    getUserByID,
    updateUser,
    deleteUserByID
}