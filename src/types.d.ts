export interface Offer {
  title: string;
  price: number;
  image?: string | undefined; //change that later
  city: string;
  //   createdAt: Date | string; //change that later
  //   following: boolean; //change name later
  //   hasShipping: boolean;
}

export interface OfferProps {
  offerInfo: Offer;
}

export interface ApiHook {
  response: { [key: string]: any };
  error: boolean;
  loading: boolean;
}

export interface FormComponentProps {
  children: JSX.Element;
}

export interface ResultBoxProps {
  placeInfo: { [key: string]: any };
  setPlace: React.Dispatch<{ [key: string]: any }>;
}
