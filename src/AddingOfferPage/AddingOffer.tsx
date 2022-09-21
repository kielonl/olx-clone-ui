import { Footer } from "../MainPage/components/Footer/components/Footer";
import { Header } from "./components/Title/Header/Header";
import "./styles/AddingOffer.scss";
export const AddingOffer = () => {
  return (
    <div
      className="adding-offer-wrapper"
      style={{ backgroundColor: "#f2f4f5" }}
    >
      <h1 style={{ marginLeft: "10vw", fontWeight: "bolder" }}>
        Dodaj ogłoszenie
      </h1>

      <Header />
      <Footer />
    </div>
  );
};
