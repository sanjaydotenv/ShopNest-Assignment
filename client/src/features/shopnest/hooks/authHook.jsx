import { useNavigate } from "react-router";

export const useAuthHook = () => {
  const navigate = useNavigate();

  return { navigate };
};
