import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { loginAPI, registerAPI } from "../api/authApi";
import { useDispatch } from "react-redux";
import { registerUser, loginUser } from "../state/authSlice";

export const useAuthHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleChangeRegister = async (data) => {
    const response = await registerAPI(data);

    dispatch(registerUser(response.data.data));
    navigate("/products");
  };

  const handleChangeLogin = async (data) => {
    const response = await loginAPI(data);

    dispatch(loginUser(response.data.data));
    navigate("/products");
  };

  return {
    navigate,
    handleSubmit,
    register,
    errors,
    handleChangeRegister,
    dispatch,
    handleChangeLogin,
  };
};
