import { FC } from "react";
import { ResultBoxProps } from "../../../../types";
import { ResultBox } from "./ResultBox";

export const RenderResultBox: FC<ResultBoxProps> = ({
  placeInfo,
  setPlace,
}) => {
  return (
    <div className="result-box-wrapper">
      {placeInfo.map((singlePlaceInfo: { [key: string]: any }, id: number) => {
        return (
          <ResultBox placeInfo={singlePlaceInfo} key={id} setPlace={setPlace} />
        );
      })}
    </div>
  );
};
