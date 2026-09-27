import axiosInstance from "../../../../src/config/axiosInstance";

export const registerAPI = async (data) => {
  const registerResponse = await axiosInstance.post("/api/auth/register", data);

  return registerResponse;
};

export const loginAPI = async (data) => {
  const loginResponse = await axiosInstance.post("/api/auth/login", data);

  return loginResponse;
};
