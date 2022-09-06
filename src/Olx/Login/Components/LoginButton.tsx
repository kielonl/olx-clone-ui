import React from "react";
import { apiRequest } from "../../../api/api";
interface Props {
  disabled: boolean;
  buttonContent: string;
  data: {
    email: string;
    password: string;
  };
  method: string;
  endpoint: string;
}
export const LoginButton: React.FC<Props> = ({
  buttonContent,
  disabled,
  data,
  method,
  endpoint,
}) => {
  const handleSubmit = async () => {
    const sendCredentials = await apiRequest(method, endpoint, data);
    console.log(sendCredentials);
  };
  return (
    <button className="login-button" disabled={disabled} onClick={handleSubmit}>
      {buttonContent}
    </button>
  );
};
