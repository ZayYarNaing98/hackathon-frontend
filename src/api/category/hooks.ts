import { UseQueryOptions, useQuery } from "react-query";
import APIs, { APIsResponse } from "..";
import { CategoryResponse } from "./api";
import { useErrorHandler } from "../hooks";

export const useQueryCategory = (
  client: boolean,
  {
    onSuccess,
    onError,
    ...options
  }: UseQueryOptions<any, any, APIsResponse<CategoryResponse>> = {},
) => {
  const errorHandler = useErrorHandler(onError);
  return useQuery({
    queryKey: "category-list",
    queryFn: () => APIs.categoryApi.getLists(client),
    onSuccess,
    onError: errorHandler,
    ...options,
  });
};
