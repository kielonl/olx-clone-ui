import { useRef, useState } from "react";
import { ImagesProps } from "../../../../types";
import { ImageInput } from "./ImageInput";
import "../styles/ChooseImages.scss";
export const ChooseImages = () => {
  const [images, setImages] = useState<ImagesProps[]>([
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
    {
      url: undefined,
      id: 8,
    },
  ]);

  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);

  const handleSort = () => {
    let _images = [...images];
    const draggedItemContent = _images.splice(dragItem.current, 1)[0];

    _images.splice(dragOverItem.current, 0, draggedItemContent);

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
