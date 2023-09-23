import axios from "axios";
import { APIsResponse } from "..";

export type AuthApiInput = {
  email: string;
  password: string;
};

export type AuthApiResponse = {
  id: number;
  token: string;
};

export const authApi = {
  login(inputData: AuthApiInput) {
    return axios
      .post<APIsResponse<AuthApiResponse>>("auth/login", inputData)
      .then((data) => data.data);
  },
};
