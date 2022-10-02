import { useEffect, useState } from "react";
import axios from "axios";

import { FormComponent } from "../../FormComponent";
import { RenderResultBox } from "./RenderResultBox";

export const PlaceSelect = () => {
  const [search, setSearch] = useState<{ [key: string]: any }>({ search: "" });
  const [responseResult, setResponseResult] = useState<string[]>([]);

  useEffect(() => {
    if (!search.search) {
      return;
    }

    if (search.isSet) {
      return;
    }

    const getData = setTimeout(() => {
      axios
        .post(`http://localhost:8080/localization`, {
          place: search.search,
        })
        .then((response) => {
          setResponseResult(response.data.res);
        });
    }, 1000);

    return () => clearTimeout(getData);
  }, [search]);

  return (
    <FormComponent>
      <div className="result-box-main">
        <input
          type="text"
          onChange={(e) => setSearch({ search: e.target.value })}
          value={
            search.place === undefined ? search.search : search.place.place
          }
        />

        <div style={search.isSet ? { display: "none" } : { opacity: "1" }}>
          {responseResult.length !== 0 && (
            <RenderResultBox placeInfo={responseResult} setPlace={setSearch} />
          )}
        </div>
      </div>
    </FormComponent>
  );
};
