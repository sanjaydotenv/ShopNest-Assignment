import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { registerAPI } from "../api/authApi";
import { useDispatch } from "react-redux";
import { registerUser } from "../state/authSlice";

export const useAuthHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleChange = async (data) => {
    const response = await registerAPI(data);

    dispatch(registerUser(response.data.data));
    navigate("/products")
  };

  return { navigate, handleSubmit, register, errors, handleChange, dispatch };
};
