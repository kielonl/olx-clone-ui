export interface Offer {
  // id: string;
  title: string;
  price: number;
  image?: string | undefined; //change that later
  localization: string;
  //   createdAt: Date | string; //change that later
  //   following: boolean; //change name later
  //   hasShipping: boolean;
}

export interface OfferProps {
  offerInfo: Offer;
  boxWidth?: string;
  isHorizontal?: boolean;
}

export interface ApiHook {
  response: { [key: string]: any };
  error: boolean;
  loading: boolean;
}

export interface CategoriesMap {
  name: string;
  color: string;
  image: string;
}
