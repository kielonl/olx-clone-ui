import "../styles/ModalCategories.scss";
import { FC } from "react";
import { lightenDarkenColor } from "../../../../../../utils/LightenColor";
import { ModalCategoriesProps } from "../../../../../../types";

export const ModalCategories: FC<ModalCategoriesProps> = ({
  categoryInfo,
  openModal,
  setCategory,
}) => {
  return (
    <div
      className="modal-categories-single-category"
      style={{
        backgroundColor: `${lightenDarkenColor(categoryInfo.color, 20)}`,
      }}
      onClick={() => {
        setCategory({ name: categoryInfo.name, id: categoryInfo.id });
        openModal(false);
      }}
    >
      <img
        src={categoryInfo.image}
        className="modal-categories-image"
        style={{ backgroundColor: categoryInfo.color }}
        alt=""
      />
      <div>{categoryInfo.name}</div>
    </div>
  );
};
