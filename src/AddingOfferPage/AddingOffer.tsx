import { Navbar } from "../MainPage/components/NavBar/components/Navbar";
import { ChooseImages } from "./components/ChooseImages/components/ChooseImages";

export const AddingOffer = () => {
  return (
    <div
      className="adding-offer-wrapper"
      style={{ backgroundColor: "#f2f4f5" }}
    >
      <Navbar />
      <ChooseImages />
    </div>
  );
};
