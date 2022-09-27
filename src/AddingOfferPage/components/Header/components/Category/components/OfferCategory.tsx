import { useState } from "react";
import { InputComponent } from "../../../../InputComponent";
import { Modal } from "./Modal";

export const OfferCategory = () => {
  const [modalState, setModalState] = useState<boolean>(false);
  const [category, setCategory] = useState<{ [key: string]: any }>({});
  return (
    <InputComponent>
      <>
        <Modal
          modalState={modalState}
          openModal={setModalState}
          setCategory={setCategory}
        />
        <div className="input-info required">Kategoria ogłoszenia</div>
        <div
          className="category-input-field"
          style={{ width: "20%" }}
          onClick={() => setModalState(!modalState)} // change that later
        >
          {category.name}
        </div>
      </>
    </InputComponent>
  );
};
