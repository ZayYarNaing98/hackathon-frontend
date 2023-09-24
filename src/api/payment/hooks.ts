import { useMutation } from "react-query";
import { paymentApi } from "./api";

export const useMutatePayment = ({
  onSuccess,
  onError,
}: {
  onSuccess: any;
  onError: any;
}) => {
  return useMutation({
    mutationKey: "payment-save",
    mutationFn: (data) => paymentApi.save(data),
    onSuccess,
    onError,
  });
};
