import { Categories } from "./Categories";
import { SearchBar } from "./SearchBar";

export const MainPage = () => {
  return (
    <div className="mainpage-wrapper">
      <SearchBar />
      <Categories />
    </div>
  );
};
