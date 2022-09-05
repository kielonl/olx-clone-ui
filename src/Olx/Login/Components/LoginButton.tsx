import React from "react";
import { apiRequest } from "../../../api/api";
interface Props {
  disabled: boolean;
  buttonType: string;
  data: {
    email: string;
    password: string;
  };
}
export const LoginButton: React.FC<Props> = ({
  buttonType,
  disabled,
  data,
}) => {
  const handleSubmit = async () => {
    const sendCredentials = await apiRequest("post", "/user", data);
    console.log(sendCredentials);
  };
  return (
    <button className="login-button" disabled={disabled} onClick={handleSubmit}>
      {buttonType}
    </button>
  );
};
