import "../styles/ImageInput.scss";
import { FC } from "react";

const imagePlaceholder = process.env.REACT_APP_IMAGE_PLACEHOLDER;

interface ImageInputProps {
  image?: string | undefined;
}

export const ImageInput: FC<ImageInputProps> = ({ image }) => {
  return (
    <label
      className="custom-file-input"
      style={{
        backgroundImage: `url(${
          image === undefined ? imagePlaceholder : image
        })`,
      }}
    >
      <input type="file" />
      <span
        onClick={(e) => console.log(e.target)}
        className={image !== undefined ? "image-added" : "image-not-added"}
      >
        Dodaj zdjecie
      </span>
    </label>
  );
};
