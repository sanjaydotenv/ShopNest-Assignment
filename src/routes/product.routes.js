import { Router } from "express";
import multer, { memoryStorage } from "multer";

const route = Router();

//import product controlleer
import productControllers from "../controllers/product.controllers.js";
import { createProductValidator } from "../validators/product.validator.js";

const upload = multer({ storage: memoryStorage() });

/**
 * @POST http://localhost:3000/api/products
 * @Public No
 * @body {title , price , image}
 */

route.post(
  "/",
  createProductValidator,
  upload.single("image"),
  productControllers.createProductController,
);

export default route;
