import "../styles/Promoted.scss";
import { OfferBox } from "./OfferBox";
export const Promoted = () => {
  return (
    <div className="promoted-wrapper">
      <h1>Ogłoszenia promowane</h1>
      <div className="promoted-box">
        <OfferBox
          offerInfo={{
            title: "szybki samochud",
            price: 421,
            localization: "Bobrowniki, Łowicz",
          }}
        />
        <OfferBox
          offerInfo={{
            title: "AirPods Pro , MEGA OKAZJA !!!",
            price: 419,
            image:
              "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1591634643000",
            localization: "Warszawa, śródmieście",
          }}
        />
      </div>
    </div>
  );
};
