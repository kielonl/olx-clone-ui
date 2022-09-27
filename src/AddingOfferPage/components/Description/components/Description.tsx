import { useState } from "react";
import {
  descriptionValidation,
  wordCounter,
} from "../../../utils/descriptionValidation";
import "../styles/Description.scss";

export const Description = () => {
  const [description, setDescription] = useState<string>("");

  return (
    <div className="description-box">
      <div className="required">Opis</div>
      <div className="description-body">
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className={`description-input ${
            descriptionValidation(description) ? "valid" : "invalid"
          }`}
          placeholder="Wpisz te informacje, które byłyby ważne dla Ciebie podczas przeglądania takiego ogłoszenia"
          rows={11}
          autoComplete="off"
        />
        <div className="description-footer">
          <div className="word-requirement">
            {wordCounter(description.length)}
          </div>
          <div className="word-counter">{description.length} / 9000</div>
        </div>
      </div>
    </div>
  );
};
