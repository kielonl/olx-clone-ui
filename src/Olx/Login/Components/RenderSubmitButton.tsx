import React from "react";
import { ENDPOINTS } from "../../../constants/ENDPOINTS";
import { FORM_CLASSES } from "../../../constants/FORM_CLASSES";
import { HTTP_METHODS } from "../../../constants/HTTP_METHODS";
import { SubmitProps } from "../../../types";
import { SubmitButton } from "./SubmitButton";

export const RenderSubmitButton: React.FC<SubmitProps> = ({
  currentBookmarkType,
  credentials,
  isButtonDisabled,
}) => {
  return (
    <div>
      {currentBookmarkType === FORM_CLASSES.LOGIN ? (
        <SubmitButton //logging
          buttonContent={currentBookmarkType}
          isButtonDisabled={isButtonDisabled}
          credentials={credentials}
          method={HTTP_METHODS.POST}
          endpoint={ENDPOINTS.LOGIN}
        />
      ) : (
        <SubmitButton //register
          buttonContent={currentBookmarkType}
          isButtonDisabled={isButtonDisabled}
          credentials={credentials}
          method={HTTP_METHODS.POST}
          endpoint={ENDPOINTS.REGISTER}
        />
      )}
    </div>
  );
};
