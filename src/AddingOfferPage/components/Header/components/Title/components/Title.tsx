import { useState } from "react";
import { InputComponent } from "../../../../InputComponent";

export const OfferTitle = () => {
  const [title, setTitle] = useState<string>("");
  console.log(title); //removes eslint warning
  return (
    <InputComponent>
      <>
        <h3>Im więcej szczegółów, tym lepiej!</h3>
        <div className="input-info required">Tytuł ogłoszenia</div>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </>
    </InputComponent>
  );
};
