import "../styles/Categories.scss";
import samochud from "../../../../assets/samochud.webp";
import { Category } from "./Category";

export const Categories = () => {
  return (
    <div className="categories-wrapper">
      <h1>Kategorie główne</h1>
      <div className="categories-box">
        <Category title="samochud" image={samochud} />
        <Category title="samochud" image={samochud} />
        <Category title="samochud" image={samochud} />
        <Category title="samochud" image={samochud} />
        <Category title="samochud" image={samochud} />
        <Category title="samochud" image={samochud} />
        <Category title="samochud" image={samochud} />
        <Category title="samochud" image={samochud} />
        <Category title="samochud" image={samochud} />
        <Category title="samochud" image={samochud} />
        <Category title="samochud" image={samochud} />
        <Category title="samochud" image={samochud} />
        <Category title="samochud" image={samochud} />
        <Category title="samochud" image={samochud} />
        <Category title="samochud" image={samochud} />
        <Category title="samochud" image={samochud} />
        <Category title="samochud" image={samochud} />
      </div>
    </div>
  );
};
