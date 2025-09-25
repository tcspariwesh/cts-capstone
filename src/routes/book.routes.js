const controller = require("../controllers/book.controller");
const { title, author, description } = require("../validation-rules/book.validations");

const validate = validations => { //router middleware
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

module.exports = function (app) {

    app.post("/api/books", validate([title, author, description]), controller.add); //public route
}
