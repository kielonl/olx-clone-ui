import { FC } from "react";
import { FormComponentProps } from "../../types";

export const InputComponent: FC<FormComponentProps> = ({ children }) => {
  return <div className="input-parent">{children}</div>;
};
