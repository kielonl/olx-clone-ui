import "../styles/ModalCategories.scss";
import { FC } from "react";
import { LightenDarkenColor } from "../../../../../../utils/LightenColor";
import { ModalCategoriesProps } from "../../../../../../types";

export const ModalCategories: FC<ModalCategoriesProps> = ({
  title,
  image,
  bgColor,
  categoryId,
  openModal,
  setCategory,
}) => {
  return (
    <div
      className="modal-categories-single-category"
      style={{ backgroundColor: `${LightenDarkenColor(bgColor, 20)}` }}
      onClick={() => {
        setCategory({ title, categoryId });
        openModal(false);
      }}
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
