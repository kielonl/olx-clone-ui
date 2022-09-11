import { Categories } from "./Categories";
import { Promoted } from "./Promoted";
import { SearchBar } from "./SearchBar";

export const MainPage = () => {
  return (
    <div className="mainpage-wrapper">
      <SearchBar />
      <Categories />
      <Promoted />
    </div>
  );
};
