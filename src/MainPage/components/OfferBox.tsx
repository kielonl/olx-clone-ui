import "../styles/OfferBox.scss";
const IMAGE_PLACEHOLDER = process.env.REACT_APP_IMAGE_PLACEHOLDER;
interface Offer {
  title: string;
  price: number;
  image: string | null; //change that later
  city: string;
  //   createdAt: Date | string; //change that later
  //   following: boolean; //change name later
  //   hasShipping: boolean;
}
interface Props {
  offerInfo: Offer;
}
export const OfferBox: React.FC<Props> = ({ offerInfo }) => {
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
