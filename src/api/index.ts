import axios from "axios";
import { authApi } from "./auth/api";
import { userApi } from "./user/api";

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
    method: string;
    endpoint: string;
    current_page: number;
    total_page: number;
    offset: number;
    limit: number;
    total: number;
  };
};

const APIs = {
  authApi,
  userApi,
};

export default APIs;
