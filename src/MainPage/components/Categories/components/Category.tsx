interface Props {
  title: string;
  image: string;
}
export const Category: React.FC<Props> = ({ title, image }) => {
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
