const httpStatus = require('http-status');
const ErrorResponse = require('../utils/errorResponse');
const CardModel = require('../models/card.model');
const bcrypt = require('bcrypt');
const z = require('zod');

const cardSchema = z.object({
    holderName: z.string().min(1).max(255),
    cardNumber: z.string().min(16).max(16),
    dateEnd: z.date(),
    CVV: z.string().min(3).max(4),
});

async function createCard(req, res, next) {
    try {
        const userId = req.user.id;
        const cardData = cardSchema.parse(req.body);

        const newCard = new CardModel({
            holderName: cardData.holderName,
            user: userId,
            cardNumber: cardData.cardNumber,
            dateEnd: cardData.dateEnd,
            CVV: cardData.CVV,
        });

        await newCard.save();

        res.status(httpStatus.CREATED).json({
            success: true,
            data: newCard,
        });
    } catch (error) {
        next(error);
    }
}

async function getAllCards(req, res, next) {
    try {
        const userId = req.user.id;
        const limit = parseInt(req.query.limit, 10) || 10;

        const cards = await CardModel.find({user: userId}, {
            limit: limit,
        });

        if (cards.rows.length === 0)
            return next(new ErrorResponse('Cards not found', httpStatus.NOT_FOUND));

        res.status(200).json({
            success: true,
            data: cards.rows,
        });
    } catch (error) {
        next(error);
    }
}

// Get a card by ID
async function findCardByID(req, res, next) {
    try {
        const cardId = req.params.id;

        const card = await CardModel.findById(cardId);

        // Check if no card was found and handle it with an error response.
        if (!card || card.user.toString() !== userId) 
            return next(new ErrorResponse('Card not found', httpStatus.NOT_FOUND));

        res.status(httpStatus.OK).json({
            success: true,
            data: card.toObject(),
        });
    } catch (error) {
        next(error);
    }
}

// Update a card by ID
async function updateCardByID(req, res, next) {
    try {
        const cardId = req.params.id;
        const userId = req.user.id;
        const updateData = cardSchema.parse(req.body);

        const card = await CardModel.findById(cardId);

        // Check if no card was found and handle it with an error response.
        if (!card || card.user.toString() !== userId) 
            return next(new ErrorResponse('Card not found', httpStatus.NOT_FOUND));

        if (updateData.holderName !== undefined) {
            card.holderName = updateData.holderName;
        }
        if (updateData.cardNumber !== undefined) {
            card.cardNumber = updateData.cardNumber;
        }
        if (updateData.dateEnd !== undefined) {
            card.dateEnd = updateData.dateEnd;
        }
        if (updateData.CVV !== undefined) {
            const encryptedCVV = await bcrypt.hash(updateData.CVV, SALT_ROUNDS);
            card.CVV = encryptedCVV;
        }


        await card.save();

        res.status(httpStatus.OK).json({
            success: true,
            data: card,
        });
    } catch (error) {
        next(error);
    }
}

// Delete a card by ID
async function deleteCardByID(req, res, next) {
    try {
        const cardId = req.params.id;
        const userId = req.user;

        const card = await CardModel.findById(cardId);

        // Check if no card was found and handle it with an error response.
        if (!card || card.user.toString() !== userId) 
            return next(new ErrorResponse('Card not found', httpStatus.NOT_FOUND));

        // Use the `remove` method to delete the card document.
        await card.remove();

        res.status(httpStatus.OK).json({
            success: true,
            data: null,
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createCard,
    getAllCards,
    findCardByID,
    updateCardByID,
    deleteCardByID,
};