import axiosInstance from "../../../config/axiosInstance";

export const createProductAPI = async (formData, accessToken) => {
  const createProductResponse = await axiosInstance.post(
    "/api/products",
    formData,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return createProductResponse;
};

export const getAllProductsAPI = async () => {
  const allProductResponse = await axiosInstance.get("/api/products")

  return allProductResponse
}

