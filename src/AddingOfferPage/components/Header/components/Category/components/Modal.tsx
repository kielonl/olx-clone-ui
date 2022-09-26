import { FC } from "react";
import { UseApiRequest } from "../../../../../../hooks/useApiRequest";
import { ModalProps, CategoriesMap } from "../../../../../../types";
import "../styles/Modal.scss";
import { ModalCategories } from "./ModalCategories";

export const Modal: FC<ModalProps> = ({
  modalState = false,
  openModal,
  setCategory,
}) => {
  const { response, loading, error } = UseApiRequest("get", "/category");
  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;

  const renderCategories = response.data.result.map(
    (categoryInfo: CategoriesMap, id: number) => {
      return (
        <ModalCategories
          key={id}
          id={categoryInfo.id}
          name={categoryInfo.name}
          image={categoryInfo.image}
          color={categoryInfo.color}
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
