import { useState } from "react";
import { useForm } from "react-hook-form";

export const useProductHook = () => {

    const [imageData, setImageData] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleImageChange = (event) => {
    setImageData(event.target.files[0].name)
  }

  const handleCreateProduct = (data) => {
    console.log(data , imageData)
};

  return {
    register,
    handleSubmit,
    reset,
    errors,
    handleCreateProduct,
    handleImageChange
  };
};
