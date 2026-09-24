import userModel from "../models/user.model.js";

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

  if (password !== confirmPassword){
    return res.status(400).json({
        message: "Confirm Password is wrong"
    })
  }

  


};

export default {
  userRegisterController,
};
