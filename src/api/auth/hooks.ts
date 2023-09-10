import { useMutation } from "react-query";
import { useErrorHandler } from "../hooks";
import { AuthApiInput } from "./api";
import APIs from "..";

export const useQueryMutationAuth = () => {
  const errorHandler = useErrorHandler();
  return useMutation({
    mutationKey: "auth",
    mutationFn: (data: AuthApiInput) => APIs.authApi.login(data),
    onSuccess: (data) => {
      return data;
    },
    onError: errorHandler,
  });
};
