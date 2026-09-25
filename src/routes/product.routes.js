import { Router } from "express";

const route = Router()

//import product controlleer
import productControllers from "../controllers/product.controllers";

/**
 * @POST http://localhost:3000/api/products
 * @Public No
 * @body {title , price , image}
 */

route.post("/" , productControllers.createProductController)

export default route