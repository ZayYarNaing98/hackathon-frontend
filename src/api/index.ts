import axios from "axios";
import { authApi } from "./auth/api";

axios.defaults.baseURL = new URL(
  "api",
  import.meta.env.VITE_APP_API_URL,
).toString();

export type APIsResponse<T> = {
  success: number;
  code: number;
  duration: number;
  message: string;
  data: T;
  meta: {
    endpoint: string;
    method: string;
    limit: number;
    offset: number;
    total: number;
  };
};

const APIs = {
  authApi,
};

export default APIs;
