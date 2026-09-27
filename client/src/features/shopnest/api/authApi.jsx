import axiosInstance from "../../../../src/config/axiosInstance";

export const registerAPI = async (data) => {
  const registerResponse = await axiosInstance.post("/api/auth/register", data);

  return registerResponse;
};
