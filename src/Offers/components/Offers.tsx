import { Link, useParams } from "react-router-dom";
import { UseApiRequest } from "../../hooks/useApiRequest";
// import { OfferBox } from "./HorizontalOfferBox";
import { OfferBox } from "../../MainPage/components/Promoted/components/OfferBox";
import { Offer } from "../../types";
import "../styles/Offers.scss";

export const Offers = () => {
  const { page } = useParams();
  const { response, loading, error } = UseApiRequest("get", `/offer/${page}`);

  if (loading) return <div>loading</div>;
  if (error) console.log(error);

  const listOffers = response.data.data.map((offer: Offer, id: number) => {
    return (
      <div key={id}>
        <OfferBox
          offerInfo={{
            title: offer.title,
            price: 419,
            image: offer.image,
            localization: offer.localization,
          }}
          boxWidth="100%"
          isHorizontal={true}
        />
        <OfferBox
          offerInfo={{
            title: offer.title,
            price: 419,
            image: offer.image,
            localization: offer.localization,
          }}
          boxWidth="100%"
          isHorizontal={true}
        />
      </div>
    );
  });

  return (
    <div className="offers-container">
      <div className="offers">{listOffers}</div>
      <div className="page-select">
        {/* pagination previous page logic */}
        {response.data.previous !== undefined && (
          <Link to={`/offers/${response.data.previous.page}`}>
            <div className="pages">{response.data.previous.page}</div>
          </Link>
        )}

        {/* pagination next page logic */}
        <div className="current-page">{page}</div>
        {response.data.next !== undefined && (
          <Link to={`/offers/${response.data.next.page}`}>
            <div className="pages">{response.data.next.page}</div>
          </Link>
        )}
      </div>
    </div>
  );
};
