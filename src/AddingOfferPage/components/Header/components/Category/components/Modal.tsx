import { FC } from "react";
import { UseApiRequest } from "../../../../../../hooks/useApiRequest";
import { Categories } from "../../../../../../MainPage/components/Categories/components/Categories";
import { Category } from "../../../../../../MainPage/components/Categories/components/Category";
import "../styles/Modal.scss";

interface CategoriesMap {
  name: string;
  color: string;
  image: string;
}
interface ModalProps {
  modalState: boolean;
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: FC<ModalProps> = ({ modalState = false, openModal }) => {
  const { response, loading, error } = UseApiRequest("get", "/category");
  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;

  const renderCategories = response.data.result.map(
    (categoryInfo: CategoriesMap) => {
      return <Category title={categoryInfo.name} image={categoryInfo.image} />;
    }
  );

  return (
    <div
      className={`modal-wrapper ${modalState ? "modal-open" : "modal-close"}`}
    >
      <div
        className="modal-close-button"
        onClick={(currModalState) => openModal(!currModalState)}
      >
        X
      </div>
      <div className="modal-categories">{renderCategories}</div>
    </div>
  );
};
