import axios from "axios";
import { APIsResponse } from "..";
import {
  getClientTokenAuthorization,
  getDashboardTokenAuthorization,
} from "@/util";

export type CategoryResponse = { data: { id: number; name: string }[] };

export const categoryApi = {
  getLists(client = false) {
    return axios.get<APIsResponse<CategoryResponse>>(
      "category",
      client ? getClientTokenAuthorization() : getDashboardTokenAuthorization(),
    );
  },
};
