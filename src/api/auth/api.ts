import axios from "axios";
import { APIsResponse } from "..";

export type AuthApiInput = {
  email: string;
  password: string;
};

export type AuthApiResponse = {
  email: string;
  name: string;
  token: string;
  image: string;
  roles: { name: string }[];
};

export const authApi = {
  login(inputData: AuthApiInput) {
    return axios
      .post<APIsResponse<AuthApiResponse>>("auth/login", inputData)
      .then((data) => data.data);
  },
};
