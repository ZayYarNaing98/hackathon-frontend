import { appClientToken, appDashboardToken } from "@/stores/storage";

export function getDashboardTokenAuthorization() {
  const { getToken } = appDashboardToken();
  return {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  };
}

export function getClientTokenAuthorization() {
  const { getToken } = appClientToken();
  return {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  };
}
