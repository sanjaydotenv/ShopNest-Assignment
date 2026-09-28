import { useState } from "react";
import { useForm } from "react-hook-form";
import { createProductAPI, deleteProductAPI, getAllProductsAPI } from "../api/productApi";
import { useDispatch, useSelector } from "react-redux";
import { allProductsData } from "../state/productSlice";

export const useProductHook = () => {
  const [imageData, setImageData] = useState(null);
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  console.log()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Product Create logic

  const handleImageChange = (event) => {
    setImageData(event.target.files[0]);
    setImagePreview(URL.createObjectURL(event.target.files[0]));
  };

  const handleCreateProduct = async (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("image", imageData);

    const response = await createProductAPI(formData, user.accessToken)
    reset();
  };

  // Fetch all products logic

  const handleAllProducts = async () => {
    const response = await getAllProductsAPI();

    dispatch(allProductsData(response.data.data.products));
  };

  // Delete product logic

  const handleDeleteProduct = async (productID) => {
    await deleteProductAPI(productID , user.accessToken)
  }

  return {
    register,
    handleSubmit,
    reset,
    errors,
    handleCreateProduct,
    handleImageChange,
    setProductPrice,
    setProductTitle,
    productTitle,
    productPrice,
    imagePreview,
    handleAllProducts,
    handleDeleteProduct
  };
};
