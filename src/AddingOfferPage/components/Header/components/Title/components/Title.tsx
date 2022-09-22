import { FC } from "react";
import { OfferTitleProps } from "../../../../../../types";

export const OfferTitle: FC<OfferTitleProps> = ({ setTitle }) => {
  return (
    <div className="input-parent">
      <h3>Im więcej szczegółów, tym lepiej!</h3>
      <div className="input-info required">Tytuł ogłoszenia</div>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
};
