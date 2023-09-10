import { UseMutationOptions, useMutation } from "react-query";
import { useErrorHandler } from "../hooks";
import { AuthApiInput, AuthApiResponse } from "./api";
import APIs, { APIsResponse } from "..";

export const useQueryMutationAuth = ({
  onSuccess,
  onError,
  ...options
}: UseMutationOptions<
  APIsResponse<AuthApiResponse>,
  unknown,
  AuthApiInput
> = {}) => {
  const errorHandler = useErrorHandler(onError);
  return useMutation({
    mutationKey: "auth",
    mutationFn: (data) => APIs.authApi.login(data),
    onSuccess: (data, variables, context) => {
      onSuccess?.(data, variables, context);
    },
    onError: errorHandler,
    ...options,
  });
};
