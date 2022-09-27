import { FC } from "react";
import { FormComponentProps } from "../../types";
import "./Header/styles/Header.scss";

export const FormComponent: FC<FormComponentProps> = ({ children }) => {
  return (
    <div className="form-component-wrapper">
      <div className="form-component-box">{children}</div>
    </div>
  );
};
