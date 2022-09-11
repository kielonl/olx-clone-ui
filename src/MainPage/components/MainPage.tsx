import { Categories } from "./Categories";
import { Footer } from "./Footer";
import { Promoted } from "./Promoted";
import { SearchBar } from "./SearchBar";

export const MainPage = () => {
  return (
    <div className="mainpage-wrapper">
      <SearchBar />
      <Categories />
      <Promoted />
      <Footer />
    </div>
  );
};
