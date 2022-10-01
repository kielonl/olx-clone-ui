import { useState } from "react";
import { ImagesProps } from "../../../../types";
import "../styles/ChooseImages.scss";
import { ImageInput } from "./ImageInput";

export const ChooseImages = () => {
  const [images, setImages] = useState<ImagesProps[]>([]);
  console.log(images);
  return (
    <div className="choose-images-wrapper">
      <div className="choose-images-field">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => {
          return <ImageInput setImage={setImages} images={images} id={id} />;
        })}
      </div>
    </div>
  );
};
