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

export interface HeaderProps {
  setTitle: React.Dispatch<string>;
  setCategory: React.Dispatch<{ [key: string]: any }>;
  category: { [key: string]: any };
}

export interface CategoriesMap {
  id: string;
  name: string;
  image: string;
  color: string;
}
export interface ModalProps {
  modalState: boolean;
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCategory: React.Dispatch<{ [key: string]: any }>;
}

export interface ModalCategoriesProps {
  title: string;
  image: string;
  bgColor: string;
  categoryId: string;
  openModal: React.Dispatch<boolean>;
  setCategory: React.Dispatch<{ [key: string]: any }>;
}

export interface OfferTitleProps {
  setTitle: React.Dispatch<string>;
}

export interface CategoryProps {
  title: string;
  image: string;
}
