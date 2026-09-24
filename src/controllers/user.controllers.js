import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";

const userRegisterController = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  const isAlreadyExists = await userModel.fineOne({
    email,
  });

  if (isAlreadyExists) {
    return res.status(409).json({
      message: "User already exists with this email address",
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Confirm Password is wrong",
    });
  }

  const hashPassword = bcrypt.hash(password, 12);
  const hashConfirmPassword = bcrypt.hash(confirmPassword, 12);

  const user = await userModel.create({
    name,
    email,
    password: hashPassword,
    confirmPassword: hashConfirmPassword,
  });

  if (!user) {
    return res.status(501).json({
      message: "Interval server error",
    });
  }

  


};

export default {
  userRegisterController,
};
