import { Categories } from "./components/Categories/components/Categories";
import { Footer } from "./components/Footer/components/Footer";
import { SearchBar } from "./components/SearchBar/components/SearchBar";

export const MainPage = () => {
  return (
    <>
      <SearchBar />
      <Categories />
      <Footer />
    </>
  );
};
