import { Footer } from "../MainPage/components/Footer/components/Footer";
import { OfferCategory } from "./components/Header/components/Category/components/OfferCategory";
import { OfferTitle } from "./components/Header/components/Title/components/Title";
import { FormComponent } from "./components/FormComponent";

export const AddingOffer = () => {
  return (
    <div
      className="adding-offer-wrapper"
      style={{ backgroundColor: "#f2f4f5" }}
    >
      <h1 style={{ marginLeft: "10vw", fontWeight: "bolder" }}>
        Dodaj ogłoszenie
      </h1>

      <FormComponent>
        <>
          <OfferTitle />
          <OfferCategory />
        </>
      </FormComponent>

      <Footer />
    </div>
  );
};
