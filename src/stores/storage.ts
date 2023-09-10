import Cookies from "js-cookie";
import { toNumber } from "lodash";

export function useTokenStore() {
  return {
    getToken() {
      return Cookies.get("_token");
    },
    setToken(token: string) {
      Cookies.set("_token", token, {
        expires: toNumber(import.meta.env.VITE_APP_COOKIES_EXPIRE_DAYS),
      });
    },
    removeToken() {
      Cookies.remove("_token");
    },
  };
}
