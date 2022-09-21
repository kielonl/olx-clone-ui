interface Props {
  title: string;
  image: string;
  bgColor: string;
}
export const Category: React.FC<Props> = ({ title, image, bgColor }) => {
  return (
    <div className="category">
      <img
        className="category-image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundColor: bgColor,
        }}
        alt="pic"
      />
      <div className="category-title">{title}</div>
    </div>
  );
};
