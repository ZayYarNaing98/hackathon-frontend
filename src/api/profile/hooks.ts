import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from "react-query";
import { useErrorHandler } from "../hooks";
import { BusinessProfileResponse } from "./api";
import APIs, { APIsResponse } from "..";

export const useQueryBusinessProfile = (
  id: number,
  {
    onSuccess,
    onError,
    ...options
  }: UseQueryOptions<any, any, APIsResponse<BusinessProfileResponse[]>> = {},
) => {
  const errorHandler = useErrorHandler(onError);
  return useQuery({
    queryKey: "business-profile-by",
    queryFn: () => APIs.businessProfileApi.getByID(id),
    onSuccess,
    onError: errorHandler,
    ...options,
  });
};

export const useQueryMutationBusinessProfile = ({
  onSuccess,
  onError,
  ...options
}: UseMutationOptions<
  APIsResponse<BusinessProfileResponse>,
  unknown,
  BusinessProfileResponse
> = {}) => {
  const errorHandler = useErrorHandler(onError);
  return useMutation({
    mutationKey: "business-profile-create",
    mutationFn: (data) => APIs.businessProfileApi.create(data),
    onSuccess: onSuccess,
    onError: errorHandler,
    ...options,
  });
};
