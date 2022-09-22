import "../styles/ModalCategories.scss";
import { FC } from "react";
import { LightenDarkenColor } from "../../../../../../utils/LightenColor";

interface ModalCategoriesProps {
  title: string;
  image: string;
  bgColor: string;
}

export const ModalCategories: FC<ModalCategoriesProps> = ({
  title,
  image,
  bgColor,
}) => {
  return (
    <div
      className="modal-categories-single-category"
      style={{ backgroundColor: `${LightenDarkenColor(bgColor, 20)}` }}
    >
      <img
        src={image}
        className="modal-categories-image"
        style={{ backgroundColor: bgColor }}
      />
      <div>{title}</div>
    </div>
  );
};
