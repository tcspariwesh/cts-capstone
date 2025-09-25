const controller = require("../controllers/book.controller");
const { body, validationResult } = require('express-validator');

const validate = validations => {
  return async (req, res, next) => {
    // sequential processing, stops running validations chain if one fails.
    for (const validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }
    }
    next();
  };
};

module.exports = function(app) {

    app.post("/api/books",validate([body('title').notEmpty().withMessage('Title is required').isLength({ max: 10 }).withMessage('Title cannot exceed 10 characters')]), controller.add); //public route
}
