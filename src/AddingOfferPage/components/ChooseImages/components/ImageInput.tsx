import "../styles/ImageInput.scss";
import { FC } from "react";
import { ImageInputProps, ImagesProps } from "../../../../types";
import { findEmpty, findImage } from "./utils";

const imagePlaceholder = process.env.REACT_APP_IMAGE_PLACEHOLDER;

export const ImageInput: FC<ImageInputProps> = ({
  images,
  setImage,
  id,
  readyToUse,
}) => {
  const updateItem = (id: number, e?: any) => {
    const newItems = images.map((img: ImagesProps) => {
      if (id === img.id) {
        return { ...img, url: images };
      }
      return img;
    });
    setImage(newItems);
  };

  const foundImage = findImage(images, id);
  return (
    <div>
      <label
        className="custom-file-input"
        style={{
          backgroundImage: `url(${
            !foundImage.url ? imagePlaceholder : foundImage.url
          })`,
          cursor: `${!!foundImage.url ? "grab" : "point"}`,
        }}
      >
        <input
          type="file"
          onChange={(e) => {
            if (findImage(images, id).url) {
              return updateItem(readyToUse(e, id), id);
            }
            readyToUse(e, findEmpty(images).id);
          }}
        />
        <span className={foundImage.url ? "image-added" : "image-not-added"}>
          Dodaj zdjecie
        </span>
      </label>
      <button onClick={() => console.log(images)}>log images</button>
    </div>
  );
};
