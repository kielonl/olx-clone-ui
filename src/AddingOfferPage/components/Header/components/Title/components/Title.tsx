import { FC } from "react";
import { HeaderState } from "../../../../../../types";

export const OfferTitle: FC<Omit<HeaderState, "setCategory">> = ({
  setTitle,
}) => {
  return (
    <div className="input-parent">
      <h3>Im więcej szczegółów, tym lepiej!</h3>
      <div className="input-info required">Tytuł ogłoszenia</div>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
};
