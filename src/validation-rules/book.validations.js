
const { body } = require('express-validator');

exports.title = body('title').notEmpty().withMessage('Title is required').isLength({ max: 10 }).withMessage('Title cannot exceed 10 characters')

exports.author = body('author').notEmpty().withMessage('Author is required').isLength({ max: 20 }).withMessage('Author cannot exceed 20 characters')

exports.description = body('description').notEmpty().withMessage('Description is required').isLength({ max: 50 }).withMessage('Description cannot exceed 50 characters')