import React from "react";
import { apiRequest } from "../../../api/api";
import { UserContext } from "../../../contexts/UserContext";
import { SubmitProps } from "../../../types";

export const SubmitButton: React.FC<
  Omit<SubmitProps, "currentBookmarkType">
> = ({ buttonContent, isButtonDisabled, credentials, method, endpoint }) => {
  const { setUser } = React.useContext(UserContext);
  const handleSubmit = async () => {
    const sendCredentials = await apiRequest(method, endpoint, credentials);
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
    <button
      className="login-button"
      disabled={isButtonDisabled}
      onClick={handleSubmit}
    >
      {buttonContent}
    </button>
  );
};
