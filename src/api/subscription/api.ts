import { getClientTokenAuthorization } from "@/util";
import axios from "axios";

export const subscriptionApi = {
  lists() {
    return axios.get("/subscriptions", getClientTokenAuthorization());
  },
};
