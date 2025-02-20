import React from "react";
import { appDashboardToken } from "@/stores/storage";
import { useNavigate } from "react-router-dom";

type ProtectedProps = {
  children: React.ReactNode | React.ReactNode[];
};

const Protected: React.FC<ProtectedProps> = ({ children }) => {
  const navigate = useNavigate();
  const { getToken } = appDashboardToken();
  const token = getToken();

  React.useEffect(() => {
    if (!token) {
      navigate({
        pathname: "/auth/continue",
      });
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }

  return <>{children}</>;
};

export default Protected;
