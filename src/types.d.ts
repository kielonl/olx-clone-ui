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

export interface CategoriesMap extends CategoryProps {
  id: string;
  color: string;
}

export interface ModalProps {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCategory: React.Dispatch<{ [key: string]: any }>;
  modalState: boolean;
}

export interface CategoryProps {
  name: string;
  image: string;
}
export interface ModalCategoriesProps {
  categoryInfo: { name: string; image: string; id: string; color: string };
  openModal: React.Dispatch<boolean>;
  setCategory: React.Dispatch<{ [key: string]: any }>;
}

export interface FormComponentProps {
  children: JSX.Element;
}
