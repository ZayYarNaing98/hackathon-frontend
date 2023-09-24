import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const useErrorHandler = (onError?: any) => {
  const navigate = useNavigate();
  return (err: AxiosError) => {
    const status = err?.response?.status;

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
export * from "./category/hooks";
export * from "./profile/hooks";
export * from "./user/hooks";

export { useErrorHandler };
