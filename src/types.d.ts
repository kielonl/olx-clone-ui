export interface Offer {
  title: string;
  price: number;
  image: string | null; //change that later
  city: string;
  //   createdAt: Date | string; //change that later
  //   following: boolean; //change name later
  //   hasShipping: boolean;
}
export interface OfferProps {
  offerInfo: Offer;
}
