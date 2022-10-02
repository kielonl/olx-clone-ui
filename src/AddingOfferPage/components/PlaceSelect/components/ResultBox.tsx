import { FC } from "react";
import { ResultBoxProps } from "../../../../types";
import "../styles/ResultBox.scss";

export const ResultBox: FC<Omit<ResultBoxProps, "postCodes">> = ({
  placeInfo,
  setPlace,
}) => {
  return (
    <div
      className="result-box"
      onClick={() => setPlace({ place: placeInfo, isSet: true })}
    >
      <div style={{ fontWeight: "bold" }}>{placeInfo.place}</div>
      <div style={{ fontSize: "11pt" }}>
        {`${placeInfo.county}, ${placeInfo.voivodeship}`}{" "}
      </div>
    </div>
  );
};
