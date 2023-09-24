import { getClientTokenAuthorization } from "@/util";
import axios from "axios";

export const featuresApi = {
  getByID(id: number) {
    return axios.get("/subscriptions/" + id, getClientTokenAuthorization());
  },
};
