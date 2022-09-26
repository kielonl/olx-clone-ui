import "../styles/ModalCategories.scss";
import { FC } from "react";
import { lightenDarkenColor } from "../../../../../../utils/LightenColor";
import { ModalCategoriesProps } from "../../../../../../types";

export const ModalCategories: FC<ModalCategoriesProps> = ({
  name,
  image,
  color,
  id,
  openModal,
  setCategory,
}) => {
  return (
    <div
      className="modal-categories-single-category"
      style={{ backgroundColor: `${lightenDarkenColor(color, 20)}` }}
      onClick={() => {
        setCategory({ name, id });
        openModal(false);
      }}
    >
      <img
        src={image}
        className="modal-categories-image"
        style={{ backgroundColor: color }}
        alt=""
      />
      <div>{name}</div>
    </div>
  );
};
