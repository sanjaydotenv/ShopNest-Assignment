import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/user.utils.js";

const userRegisterController = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  const isAlreadyExists = await userModel.findOne({
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

  const hashPassword = await bcrypt.hash(password, 12);
  const hashConfirmPassword = await bcrypt.hash(confirmPassword, 12);

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

  const refreshToken = generateRefreshToken(user._id);

  console.log(refreshToken)

  await userModel.findByIdAndUpdate(user._id, {
    refreshToken,
  });

  res.cookie("refreshToken", refreshToken);

  res.status(201).json({
    message: "User registered successfully",
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    },
  });
};

export default {
  userRegisterController,
};
