import { getClientTokenAuthorization } from "@/util";
import axios from "axios";

export type BusinessProfileResponse = {
  id: number;
  user_id: number;
  name: string;
  description: string;
  category_id: number;
  phone: string;
  email: string;
  facebook: string;
  address: string;
  image: null | string;
};

export const businessProfileApi = {
  getByID(id: number) {
    return axios
      .get("/profiles/" + id, getClientTokenAuthorization())
      .then((data) => data.data);
  },
  create(data: BusinessProfileResponse) {
    return axios
      .post("/profiles", data, getClientTokenAuthorization())
      .then((data) => data.data);
  },
};
