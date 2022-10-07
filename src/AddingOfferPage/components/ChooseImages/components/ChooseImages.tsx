import { useRef, useState } from "react";
import { ImagesProps } from "../../../../types";
import { ImageInput } from "./ImageInput";
import "../styles/ChooseImages.scss";
import { findEmpty } from "./utils";
export const ChooseImages = () => {
  const [images, setImages] = useState<ImagesProps[]>([
    {
      url: undefined,
      id: 0,
    },
    {
      url: undefined,
      id: 1,
    },
    {
      url: undefined,
      id: 2,
    },
    {
      url: undefined,
      id: 3,
    },
    {
      url: undefined,
      id: 4,
    },
    {
      url: undefined,
      id: 5,
    },
    {
      url: undefined,
      id: 6,
    },
    {
      url: undefined,
      id: 7,
    },
  ]);
  const dragItem = useRef<any>(null); //change that later
  const dragOverItem = useRef<any>(null);

  const handleSort = () => {
    let _images = [...images];
    const draggedItemContent = _images.splice(dragItem.current, 1)[0];

    if (images[dragOverItem.current].url === undefined) {
      dragOverItem.current = findEmpty(images)?.id;
    }

    _images.splice(dragOverItem.current, 0, draggedItemContent);
    console.log(_images);

    dragItem.current = null;
    dragOverItem.current = null;
    setImages(_images);
  };

  return (
    <div className="choose-images-wrapper">
      <div className="choose-images-field">
        {images.map((item, index) => (
          <div
            key={index}
            className="list-item"
            draggable
            onDragStart={() => (dragItem.current = index)}
            onDragEnter={() => (dragOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <ImageInput images={images} setImage={setImages} id={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
