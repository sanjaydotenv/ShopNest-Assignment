import { body } from "express-validator";

export const createProductValidator = [
  body("title")
    .exists()
    .withMessage("Title is required")
    .bail()
    .isString()
    .withMessage("Title must be a string")
    .bail()
    .trim()
    .notEmpty()
    .withMessage("Title cannot be empty")
    .bail()
    .isLength({ min: 3, max: 100 })
    .withMessage("Title must be between 3 and 100 characters"),

  body("price")
    .exists()
    .withMessage("Price is required")
    .bail()
    .notEmpty()
    .withMessage("Price cannot be empty")
    .bail()
    .isFloat({ min: 0 })
    .withMessage("Price must be a valid positive number"),

  body("image").isString().withMessage("Image must be a string"),
];
