import "../styles/Categories.scss";
// import samochud from "../../assets/samochud.webp";
import { Category } from "./Category";

export const Categories = () => {
  return (
    <div className="categories-wrapper">
      <h1>Kategorie główne</h1>
      <div className="categories-box">
        <Category
          title="Bankowość"
          image="https://a.allegroimg.com/original/11996c/ac538fc447c3a886ed6eda0e7310/Duza-swinka-skarbonka-rozowa/Big-Bank-Piggy-Bank-roz"
        />
        <Category
          title="Technologie"
          image="https://previews.123rf.com/images/bblakkr/bblakkr1810/bblakkr181000030/110745731-smart-phone-and-headphone-on-freesia-yellow-background.jpg"
        />
        <Category
          title="Zwierzęta"
          image="https://t3.ftcdn.net/jpg/03/06/37/22/360_F_306372291_8RtHL5R9ETkZadUdpp6PYrXSsmqRwqhv.jpg"
        />
        <Category
          title="Wystrój domu"
          image="https://media.istockphoto.com/photos/interior-design-minimal-style-concept-picture-id952206646?k=20&m=952206646&s=612x612&w=0&h=5Saz53FZN_EY0u1RbLzXlAdjwlXIrMdZkNLQv7YKqD4="
        />
        <Category
          title="Sport"
          image="https://img.freepik.com/premium-photo/blue-mono-color-football-pink-solid-background-minimalistic-design-object-3d-rendering-icon-ui-ux-interface-element_187882-2730.jpg"
        />
        <Category
          title="Remont"
          image="https://previews.123rf.com/images/ssilver/ssilver1009/ssilver100900014/7698453-cans-of-paint.jpg"
        />
        <Category
          title="Nieruchomości"
          image="https://media.istockphoto.com/photos/beautiful-residential-home-exterior-on-bright-sunny-day-with-green-picture-id1211174464?k=20&m=1211174464&s=612x612&w=0&h=fQ3ahmaJnYcZb0UQtBXvOhcuhHFTgK9BA5Mylic7Gnw="
        />
        <Category
          title="Ogrodnictwo"
          image="https://static.standard.co.uk/2022/04/27/12/8%20Flymo%20EasiStore%20300R%204.jpg?width=1200&auto=webp&quality=75"
        />
      </div>
    </div>
  );
};
