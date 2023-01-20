import { Footer } from "../MainPage/components/Footer/components/Footer";
import { Navbar } from "../MainPage/components/NavBar/components/Navbar";
import { Description } from "./components/Description/components/Description";

export const AddingOffer = () => {
  return (
    <div style={{ backgroundColor: "#f2f4f5" }}>
      <Navbar />
      <Description />
      <Footer />
    </div>
  );
};
