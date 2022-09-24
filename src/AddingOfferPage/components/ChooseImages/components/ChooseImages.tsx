import { useState } from "react";
import "../styles/ChooseImages.scss";
import { ImageInput } from "./ImageInput";

interface ImagesProps {
  id: number;
  url: string;
}

export const ChooseImages = () => {
  const [images, setImages] = useState<ImagesProps[]>([]);
  console.log(images);

  return (
    <div className="choose-images-wrapper">
      <div className="choose-images-field">
        <ImageInput setImage={setImages} images={images} id={0} />
        <ImageInput setImage={setImages} images={images} id={1} />
        <ImageInput setImage={setImages} images={images} id={2} />
        <ImageInput setImage={setImages} images={images} id={3} />
        <ImageInput setImage={setImages} images={images} id={4} />
        <ImageInput setImage={setImages} images={images} id={5} />
        <ImageInput setImage={setImages} images={images} id={6} />
        <ImageInput setImage={setImages} images={images} id={7} />
      </div>
    </div>
  );
};
