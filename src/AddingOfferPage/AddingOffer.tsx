import { Footer } from "../MainPage/components/Footer/components/Footer";
import { Navbar } from "../MainPage/components/NavBar/components/Navbar";
import { PlaceSelect } from "./components/PlaceSelect/components/PlaceSelect";

export const AddingOffer = () => {
  return (
    <div style={{ backgroundColor: "#f2f4f5" }}>
      <Navbar />
      <PlaceSelect />
      <Footer />
    </div>
  );
};
