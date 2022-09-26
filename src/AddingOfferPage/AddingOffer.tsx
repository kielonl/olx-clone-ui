import { useState } from "react";
import { Footer } from "../MainPage/components/Footer/components/Footer";
import { Navbar } from "../MainPage/components/NavBar/components/Navbar";
import { Description } from "./components/Description/components/Description";

export const AddingOffer = () => {
  const [description, setDescription] = useState<string>("");
  return (
    <div
      className="adding-offer-wrapper"
      style={{ backgroundColor: "#f2f4f5" }}
    >
      <Navbar />
      <Description setDescription={setDescription} description={description} />
      <Footer />
    </div>
  );
};
