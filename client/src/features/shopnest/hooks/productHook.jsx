import { useState } from "react";
import { useForm } from "react-hook-form";
import { createProductAPI } from "../api/productApi";
import { useSelector } from "react-redux";

export const useProductHook = () => {
  const [imageData, setImageData] = useState(null);

  const { user } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleImageChange = (event) => {
    setImageData(event.target.files[0]);
  };

  const handleCreateProduct = async (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("image", imageData);
    console.log(imageData)

    const response = await createProductAPI(formData, user.accessToken);
    console.log(response);
    reset()
  };

  return {
    register,
    handleSubmit,
    reset,
    errors,
    handleCreateProduct,
    handleImageChange,
  };
};
