import { useEffect, useState } from "react";
import axios from "axios";

import { FormComponent } from "../../FormComponent";
import { RenderResultBox } from "./RenderResultBox";

export const PlaceSelect = () => {
  const [postCode, setPostCode] = useState("");
  const [result, setResult] = useState<any>([]);
  useEffect(() => {
    if (postCode === "") {
      return;
    }
    const getData = setTimeout(() => {
      axios
        .post(`http://localhost:8080/localization`, { place: postCode })
        .then((response) => {
          setResult(response.data.res);
        });
    }, 1000);

    return () => clearTimeout(getData);
  }, [postCode]);

  return (
    <FormComponent>
      <div className="result-box-main">
        <input type="text" onChange={(e) => setPostCode(e.target.value)} />
        {result !== "[]" && <RenderResultBox placeInfo={result} />}
      </div>
    </FormComponent>
  );
};
