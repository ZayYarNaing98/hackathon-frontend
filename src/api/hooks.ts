import { appToken } from "@/stores/storage";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const useErrorHandler = (onError?: any) => {
  const navigate = useNavigate();
  const { removeToken } = appToken();
  return (err: AxiosError) => {
    const status = err?.response?.status;

    removeToken();

    if (status === 401) {
      return;
    }
    const isErrorFunExist = onError?.(err);

    if (!isErrorFunExist) {
      return;
    }
    navigate({
      pathname: "/error",
    });
  };
};

export * from "./auth/hooks";

export { useErrorHandler };
