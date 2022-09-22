import { FC } from "react";
import { UseApiRequest } from "../../../../../../hooks/useApiRequest";
import "../styles/Modal.scss";
import { ModalCategories } from "./ModalCategories";

interface CategoriesMap {
  id: string;
  name: string;
  image: string;
  color: string;
}
interface ModalProps {
  modalState: boolean;
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCategory: React.Dispatch<{ [key: string]: any }>;
}

export const Modal: FC<ModalProps> = ({
  modalState = false,
  openModal,
  setCategory,
}) => {
  const { response, loading, error } = UseApiRequest("get", "/category");
  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;

  const renderCategories = response.data.result.map(
    (categoryInfo: CategoriesMap) => {
      return (
        <ModalCategories
          categoryId={categoryInfo.id}
          title={categoryInfo.name}
          image={categoryInfo.image}
          bgColor={categoryInfo.color}
          openModal={openModal}
          setCategory={setCategory}
        />
      );
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
      <div className="modal-categories-wrapper">{renderCategories}</div>
    </div>
  );
};
