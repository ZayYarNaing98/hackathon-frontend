import { getClientTokenAuthorization } from "@/util";
import axios from "axios";

export const paymentApi = {
  save(data: any) {
    return axios
      .post("/payment", data, getClientTokenAuthorization())
      .then((data) => data.data);
  },
};
