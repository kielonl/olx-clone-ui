import React from "react";
import { apiRequest } from "../../../api/api";
import { UserContext } from "../../../contexts/UserContext";
interface Props {
  disabled: boolean;
  buttonContent: string;
  credentials: {
    email: string;
    password: string;
  };
  method: string;
  endpoint: string;
}

export const SubmitButton: React.FC<Props> = ({
  buttonContent,
  disabled,
  credentials,
  method,
  endpoint,
}) => {
  const { setUser } = React.useContext(UserContext);
  const handleSubmit = async () => {
    const sendCredentials = await apiRequest(method, endpoint, credentials);

    console.log(sendCredentials);
    const errorResponse = sendCredentials?.response?.data.message;
    if (errorResponse) {
      console.error(errorResponse);
      return;
    }
    //fix this so it doesnt need ts-ignore
    //@ts-ignore
    if (endpoint === "/auth/login") setUser(sendCredentials);
  };
  return (
    <button className="login-button" disabled={disabled} onClick={handleSubmit}>
      {buttonContent}
    </button>
  );
};
