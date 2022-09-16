import { OfferProps } from "../../../../types";
import "../styles/OfferBox.scss";
const IMAGE_PLACEHOLDER = process.env.REACT_APP_IMAGE_PLACEHOLDER;

export const OfferBox: React.FC<OfferProps> = ({ offerInfo }) => {
  console.log(offerInfo.image !== null ? offerInfo.image : IMAGE_PLACEHOLDER);
  return (
    <div className="offerbox-wrapper">
      <div className="offer-box">
        <img
          className="offer-image"
          src={offerInfo.image !== null ? offerInfo.image : IMAGE_PLACEHOLDER}
          alt="offer"
        />
        <div className="offer-details">
          <div className="offer-title">{offerInfo.title}</div>
          <div className="offer-city">{offerInfo.city}</div>
          <div className="offer-price">{offerInfo.price} zł</div>
        </div>
      </div>
    </div>
  );
};
