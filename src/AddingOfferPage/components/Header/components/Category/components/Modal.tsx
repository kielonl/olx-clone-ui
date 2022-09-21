import { FC } from "react";
import { Categories } from "../../../../../../MainPage/components/Categories/components/Categories";
import "../styles/Modal.scss";

interface ModalProps {
  modalState: boolean;
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: FC<ModalProps> = ({ modalState = false, openModal }) => {
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
      <Categories />
    </div>
  );
};
