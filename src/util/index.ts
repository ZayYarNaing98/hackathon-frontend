import { appToken } from "@/stores/storage";

export function getTokenAuthorization() {
  const { getToken } = appToken();
  return {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  };
}
