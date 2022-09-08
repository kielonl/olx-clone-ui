import React from "react";
import { ENDPOINTS } from "../../../constants/ENDPOINTS";
import { FORM_CLASSES } from "../../../constants/FORM_CLASSES";
import { HTTP_METHODS } from "../../../constants/HTTP_METHODS";
import { SubmitButton } from "./SubmitButton";

interface Props {
  currentBookmarkType: FORM_CLASSES;
  credentials: {
    email: string;
    password: string;
  };
  isButtonDisabled: boolean;
}

export const RenderSubmitButton: React.FC<Props> = ({
  currentBookmarkType,
  credentials,
  isButtonDisabled,
}) => {
  return (
    <div>
      {currentBookmarkType === FORM_CLASSES.LOGIN ? (
        <SubmitButton //logging
          buttonContent={currentBookmarkType}
          disabled={isButtonDisabled}
          credentials={credentials}
          method={HTTP_METHODS.POST}
          endpoint={ENDPOINTS.LOGIN}
        />
      ) : (
        <SubmitButton //register
          buttonContent={currentBookmarkType}
          disabled={isButtonDisabled}
          credentials={credentials}
          method={HTTP_METHODS.POST}
          endpoint={ENDPOINTS.REGISTER}
        />
      )}
    </div>
  );
};
