import { FC } from "react";
import { HeaderProps } from "../../../types";
import { OfferCategory } from "./components/Category/components/OfferCategory";
import { OfferTitle } from "./components/Title/components/Title";
import "./styles/Header.scss";

export const Header: FC<HeaderProps> = ({
  setTitle,
  setCategory,
  category,
}) => {
  return (
    <div className="header-wrapper">
      <div className="header-box">
        <OfferTitle setTitle={setTitle} />
        <OfferCategory setCategory={setCategory} category={category} />
      </div>
    </div>
  );
};
