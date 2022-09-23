import "../styles/ChooseImages.scss";
import { ImageInput } from "./ImageInput";

export const ChooseImages = () => {
  return (
    <div className="choose-images-wrapper">
      <div className="choose-images-field">
        <ImageInput />
        <ImageInput />
        <ImageInput />
        <ImageInput />
        <ImageInput />
        <ImageInput />
        <ImageInput />
        <ImageInput />
      </div>
    </div>
  );
};
