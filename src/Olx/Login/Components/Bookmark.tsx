import React from "react";
import { FORM_CLASSES } from "../../../constants/FORM_CLASSES";
import { BookmarkProps } from "../../../types";

export const Bookmark: React.FC<BookmarkProps> = ({
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
