import { useState } from "react";
import { Footer } from "../MainPage/components/Footer/components/Footer";
import { Header } from "./components/Header/Header";
export const AddingOffer = () => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<{ [key: string]: any }>({});
  return (
    <div
      className="adding-offer-wrapper"
      style={{ backgroundColor: "#f2f4f5" }}
    >
      <h1 style={{ marginLeft: "10vw", fontWeight: "bolder" }}>
        Dodaj ogłoszenie
      </h1>

      <Header
        setTitle={setTitle}
        setCategory={setCategory}
        category={category}
      />
      <Footer />
    </div>
  );
};
