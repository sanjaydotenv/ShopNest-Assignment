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

/**
 * @GET http://localhost:3000/api/products
 * @Public Yes
 */

route.get("/", productControllers.listAllProductsController);

/**
 * @GET http://localhost:3000/api/products/:productID
 * @Public Yes
 * productID
 */

route.get("/:productID", productControllers.getSingleProductController);

/**
 * @PUT http://localhost:3000/api/products/:productID
 * @Public No
 * @productID
 */

route.put("/:productID", productControllers.updateProductController);

export default route;
