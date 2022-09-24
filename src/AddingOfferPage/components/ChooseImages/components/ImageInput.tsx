import "../styles/ImageInput.scss";
import { FC } from "react";

const imagePlaceholder = process.env.REACT_APP_IMAGE_PLACEHOLDER;

interface ImageInputProps {
  image?: string | undefined;
  images: any;
  setImage: React.Dispatch<any>; //change type
  id: number;
}

export const ImageInput: FC<ImageInputProps> = ({
  image,
  images,
  setImage,
  id,
}) => {
  const updateItem = (event: any, id: number) => {
    const newItems = images.map((img: any) => {
      if (id === img.id) {
        return { ...img, url: event.target.value };
      }
      return img;
    });
    setImage(newItems);
    console.log(images);
  };

  const sendFile = (e: any, id: number) => {
    // change type
    const [file] = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (images.length === 0) {
        return setImage([...images, { id: id, url: reader.result }]);
      }
      images.find((img: any) => {
        if (id === img.id) {
          return updateItem(e, id);
        }
        return setImage([...images, { id: id, url: reader.result }]);
      });
    };

    //wyglada jak chujnia, zmienic to
  };

  return (
    <>
      <label
        className="custom-file-input"
        style={{
          backgroundImage: `url(${
            image === undefined ? imagePlaceholder : image
          })`,
        }}
      >
        <input type="file" onChange={(e) => sendFile(e, id)} />

        <span
          className={image !== undefined ? "image-added" : "image-not-added"}
        >
          Dodaj zdjecie
        </span>
      </label>
    </>
  );
};
