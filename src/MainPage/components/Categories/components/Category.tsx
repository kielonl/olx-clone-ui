import { CategoryProps } from "../../../../types";

export const Category: React.FC<CategoryProps> = ({ title, image }) => {
  return (
    <div className="category">
      <img
        className="category-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
        alt="pic"
      />
      <div className="category-title">{title}</div>
    </div>
  );
};
