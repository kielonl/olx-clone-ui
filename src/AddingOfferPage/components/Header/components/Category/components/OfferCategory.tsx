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
      <input
        type="text"
        style={{ width: "20%" }}
        value={category.title}
        onClick={() => setModalState(!modalState)} // change that later
      />
    </div>
  );
};
