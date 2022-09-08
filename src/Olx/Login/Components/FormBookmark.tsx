import React from "react";
import { FORM_CLASSES } from "../../../constants/FORM_CLASSES";

interface Props {
  bookmarkType: FORM_CLASSES;
  setType: React.Dispatch<React.SetStateAction<FORM_CLASSES>>;
  currType: FORM_CLASSES;
}

export const FormBookmark: React.FC<Props> = ({
  bookmarkType,
  setType,
  currType,
}) => {
  //component name is still questionable
  return (
    <span
      className={`login-form-button ${
        bookmarkType === currType && FORM_CLASSES.SELECTED
      }`}
      onClick={() => setType(bookmarkType)}
    >
      {bookmarkType}
    </span>
  );
};
