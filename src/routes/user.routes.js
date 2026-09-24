import { Router } from "express";

// import userControllers
import userControllers from "../controllers/user.controllers.js";

// import validator
import { registerValidator } from "../validators/auth.validator.js";

const route = Router();

/**
 * @POST http://localhost:3000/api/auth/register
 * @Public Yes
 * @body {name , email , password , confirmPassword}
 */
route.post(
  "/register",
  registerValidator,
  userControllers.userRegisterController,
);

export default route;
