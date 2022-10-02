import { FC } from "react";
import { ResultBoxProps } from "../../../../types";
import { ResultBox } from "./ResultBox";

export const RenderResultBox: FC<ResultBoxProps> = ({ placeInfo }) => {
  return (
    <div className="result-box-wrapper">
      {placeInfo.map((singlePlaceInfo: string[]) => {
        return <ResultBox placeInfo={singlePlaceInfo} />;
      })}
    </div>
  );
};
