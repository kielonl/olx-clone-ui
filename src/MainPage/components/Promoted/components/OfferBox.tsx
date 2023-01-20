import { OfferProps } from "../../../../types";
import "../styles/OfferBox.scss";
const IMAGE_PLACEHOLDER = process.env.REACT_APP_IMAGE_PLACEHOLDER;

export const OfferBox: React.FC<OfferProps> = ({
  offerInfo,
  boxWidth,
  isHorizontal,
}) => {
  return (
    <div className={`offerbox-wrapper ${isHorizontal && "horizontal-offer"}`}>
      <div className="offer-box" style={{ width: boxWidth }}>
        <div className="offer-image-container">
          <img
            className="offer-image"
            src={offerInfo.image || IMAGE_PLACEHOLDER}
            alt="offer"
          />
        </div>
        <div className="offer-details">
          <div className="offer-title">{offerInfo.title}</div>
          <div className="offer-price">{offerInfo.price} zł</div>
          <div className="offer-city">{offerInfo.localization}</div>
        </div>
      </div>
    </div>
  );
};
