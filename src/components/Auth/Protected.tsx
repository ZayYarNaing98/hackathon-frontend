import React from "react";

type ProtectedProps = {
  children: React.ReactNode | React.ReactNode[];
};

const Protected: React.FC<ProtectedProps> = ({ children }) => {
  return <>{children}</>;
};

export default Protected;
