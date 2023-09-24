import React from "react";
import { appClientToken } from "@/stores/storage";
import { useNavigate } from "react-router-dom";

type ProtectedProps = {
  children: React.ReactNode | React.ReactNode[];
};

const Protected: React.FC<ProtectedProps> = ({ children }) => {
  const navigate = useNavigate();
  const { getToken } = appClientToken();
  const token = getToken();

  React.useEffect(() => {
    if (!token) {
      navigate({
        pathname: "/",
      });
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }

  return <>{children}</>;
};

export default Protected;
