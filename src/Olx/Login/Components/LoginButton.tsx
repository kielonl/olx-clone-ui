import React from "react";
import { apiRequest } from "../../../api/api";
import { UserContext } from "../../../contexts/UserContext";
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
  const { setUser } = React.useContext(UserContext);
  const handleSubmit = async () => {
    const sendCredentials = await apiRequest(method, endpoint, data);

    const errorResponse = sendCredentials?.response?.data.message;
    if (errorResponse) {
      console.error(errorResponse);
      return;
    }
    //fix this so it doesnt need ts-ignore
    //@ts-ignore
    setUser(sendCredentials);
  };
  return (
    <button className="login-button" disabled={disabled} onClick={handleSubmit}>
      {buttonContent}
    </button>
  );
};
