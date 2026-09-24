import { Router } from "express";

// import userControllers
import userControllers from "../controllers/user.controllers";

const route = Router();

/**
 * @POST http://localhost:3000/api/auth/register
 * @Public Yes
 * @body {name , email , password , confirmPassword}
 */
route.post("/register", userControllers.userRegisterController);

export default route;
