import { useState } from "react";
import { Modal } from "./Modal";

export const OfferCategory = () => {
  const [modalState, setModalState] = useState<boolean>(false);
  return (
    <div className="input-parent">
      <Modal modalState={modalState} openModal={setModalState} />
      <div className="input-info required">Kategoria ogłoszenia</div>
      <input
        type="text"
        style={{ width: "20%" }}
        onClick={() => setModalState(!modalState)} // change that later
      />
    </div>
  );
};
