import { useEffect, useState } from "react";
import axios from "axios";

import { FormComponent } from "../../FormComponent";

export const PlaceSelect = () => {
  const [postCode, setPostCode] = useState("");
  const [result, setResult] = useState<any>([]);
  //
  useEffect(() => {
    if (postCode === "") {
      return;
    }
    const getData = setTimeout(() => {
      axios
        .post(`http://localhost:8080/localization`, { postCode: postCode })
        .then((response) => {
          console.log(response);
          setResult(response.data.res);
        });
    }, 1000);

    return () => clearTimeout(getData);
  }, [postCode]);

  return (
    <FormComponent>
      <>
        <input type="text" onChange={(e) => setPostCode(e.target.value)} />
        {result !== "[]" &&
          result.map((postCode: { [post_code: string]: string }) => {
            return <div>{postCode.post_code}</div>;
          })}
      </>
    </FormComponent>
  );
};
