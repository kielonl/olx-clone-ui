import { OfferCategory } from "./components/Category/components/OfferCategory";
import { OfferTitle } from "./components/Title/components/Title";
import "./styles/Header.scss";
export const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-box">
        <OfferTitle />
        <OfferCategory />
      </div>
    </div>
  );
};
