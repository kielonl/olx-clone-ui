import { FC, useState } from "react";
import { HeaderProps } from "../../../../../../types";
import { Modal } from "./Modal";

export const OfferCategory: FC<Omit<HeaderProps, "setTitle">> = ({
  setCategory,
  category,
}) => {
  const [modalState, setModalState] = useState<boolean>(false);
  return (
    <div className="input-parent">
      <Modal
        modalState={modalState}
        openModal={setModalState}
        setCategory={setCategory}
      />
      <div className="input-info required">Kategoria ogłoszenia</div>
      <div
        // type="text"
        className="category-input-field"
        style={{ width: "20%" }}
        onClick={() => setModalState(!modalState)} // change that later
      >
        {category.name}
      </div>
    </div>
  );
};
