import Cookies from "js-cookie";
import { toNumber } from "lodash";

export function appDashboardToken() {
  return {
    getToken() {
      return Cookies.get("_token_dashboard");
    },
    setToken(token: string) {
      Cookies.set("_token_dashboard", token, {
        expires: toNumber(import.meta.env.VITE_APP_COOKIES_EXPIRE_DAYS),
      });
    },
    removeToken() {
      Cookies.remove("_token_dashboard");
    },
  };
}

export function appClientToken() {
  return {
    getToken() {
      return Cookies.get("_token_client");
    },
    setToken(token: string) {
      Cookies.set("_token_client", token, {
        expires: toNumber(import.meta.env.VITE_APP_COOKIES_EXPIRE_DAYS),
      });
    },
    removeToken() {
      Cookies.remove("_token_client");
    },
  };
}
