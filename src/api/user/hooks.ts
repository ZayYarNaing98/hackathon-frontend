import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from "react-query";
import { useErrorHandler } from "../hooks";
import APIs, { APIsResponse } from "..";
import { UserApiResponse, UserCreateApiInput, UserUpdateApiInput } from "./api";

export const useQueryUser = ({
  onSuccess,
  onError,
  ...options
}: UseQueryOptions<any, any, APIsResponse<UserApiResponse[]>> = {}) => {
  const errorHandler = useErrorHandler(onError);
  return useQuery({
    queryKey: "user-list",
    queryFn: () => APIs.userApi.lists(),
    onSuccess,
    onError: errorHandler,
    ...options,
  });
};

export const useQueryUserBy = (
  id: number,
  {
    onSuccess,
    onError,
    ...options
  }: UseQueryOptions<any, any, APIsResponse<UserApiResponse[]>> = {},
) => {
  const errorHandler = useErrorHandler(onError);
  return useQuery({
    queryKey: "user-list-by",
    queryFn: () => APIs.userApi.listById(id),
    onSuccess,
    onError: errorHandler,
    ...options,
  });
};

export const useQueryMutateUserDelete = ({
  onSuccess,
  onError,
  ...options
}: UseMutationOptions<APIsResponse<UserApiResponse>, unknown, number> = {}) => {
  const errorHandler = useErrorHandler(onError);
  return useMutation({
    mutationKey: "user-delete",
    mutationFn: (id) => APIs.userApi.delete(id),
    onSuccess,
    onError: errorHandler,
    ...options,
  });
};

export const useQueryMutateUserCreate = ({
  onSuccess,
  onError,
  ...options
}: UseMutationOptions<
  APIsResponse<UserApiResponse>,
  unknown,
  UserCreateApiInput
> = {}) => {
  const errorHandler = useErrorHandler(onError);
  return useMutation({
    mutationKey: "user-create",
    mutationFn: (data) => APIs.userApi.create(data),
    onSuccess,
    onError: errorHandler,
    ...options,
  });
};

export const useQueryMutateUserUpdate = ({
  onSuccess,
  onError,
  ...options
}: UseMutationOptions<
  APIsResponse<UserApiResponse>,
  unknown,
  UserUpdateApiInput
> = {}) => {
  const errorHandler = useErrorHandler(onError);
  return useMutation({
    mutationKey: "user-create",
    mutationFn: (data) => APIs.userApi.update(data),
    onSuccess,
    onError: errorHandler,
    ...options,
  });
};
