import { Categories } from "./components/Categories/components/Categories";
import { Footer } from "./components/Footer/components/Footer";
import { Promoted } from "./components/Promoted/components/Promoted";
import { SearchBar } from "./components/SearchBar/components/SearchBar";

export const MainPage = () => {
  return (
    <>
      <SearchBar />
      <Categories />
      <Promoted />
      <Footer />
    </>
  );
};
