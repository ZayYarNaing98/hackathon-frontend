import { UseQueryOptions, useQuery } from "react-query";
import APIs, { APIsResponse } from "..";
import { useErrorHandler } from "../hooks";

export const useQuerySubscription = (
  id: number,
  {
    onSuccess,
    onError,
    ...options
  }: UseQueryOptions<any, any, APIsResponse<any>> = {},
) => {
  const errorHandler = useErrorHandler(onError);
  return useQuery({
    queryKey: "subscription-list",
    queryFn: () => APIs.featuresApi.getByID(id),
    onSuccess,
    onError: errorHandler,
    ...options,
  });
};
