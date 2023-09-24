import { appDashboardToken } from "@/stores/storage";
import React from "react";
import { useNavigate } from "react-router-dom";

export const useTitle = (title: string) => {
  const documentDefined = typeof document !== "undefined";

  React.useEffect(() => {
    if (!documentDefined) return;
    if (document.title !== title) document.title = title;
    return () => {
      document.title = import.meta.env.VITE_APP_TITLE;
    };
  }, [documentDefined, title]);
};

export const useDashboardLogout = () => {
  const { removeToken } = appDashboardToken();
  const navigate = useNavigate();

  return () => {
    removeToken();
    navigate({
      pathname: "/auth/continue",
    });
  };
};
