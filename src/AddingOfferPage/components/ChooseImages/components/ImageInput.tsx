import "../styles/ImageInput.scss";
import { FC } from "react";
import { ImageInputProps, ImagesProps } from "../../../../types";

const imagePlaceholder = process.env.REACT_APP_IMAGE_PLACEHOLDER;

export const ImageInput: FC<ImageInputProps> = ({ images, setImage, id }) => {
  const updateItem = (e: any, id: number) => {
    const [file] = e.target.files; //try to do something with the repeatability later
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const newItems = images.map((img: ImagesProps) => {
        if (id === img.id) {
          return { ...img, url: reader.result };
        }
        return img;
      });
      setImage(newItems);
      console.log(images);
    };
  };

  const sendFile = (e: any, id: number) => {
    const [file] = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      if (images.length === 0) {
        return setImage([...images, { id: id, url: reader.result }]);
      }

      images.find((img: ImagesProps) => {
        if (id === img.id) {
          return updateItem(e, id);
        }
        return setImage([...images, { id: id, url: reader.result }]);
      });
    };
  };

  const findImage = images.find((img: ImagesProps) => {
    return id === img.id;
  });

  return (
    <>
      <label
        className="custom-file-input"
        style={{
          backgroundImage: `url(${
            findImage === undefined ? imagePlaceholder : findImage.url
          })`,
        }}
      >
        <input type="file" onChange={(e) => sendFile(e, id)} />
        <span
          className={
            findImage !== undefined ? "image-added" : "image-not-added"
          }
        >
          Dodaj zdjecie
        </span>
      </label>
    </>
  );
};
