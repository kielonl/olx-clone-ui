import "../styles/Categories.scss";
import { Category } from "./Category";
import { UseApiRequest } from "../../../../hooks/useApiRequest";
import { CategoriesMap } from "../../../../types";

export const Categories = () => {
  const { response, loading, error } = UseApiRequest("get", "/category");
  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;

  const renderCategories = response.data.result.map(
    (categoryInfo: CategoriesMap) => {
      return (
        <Category
          title={categoryInfo.name}
          image={categoryInfo.image}
          bgColor={categoryInfo.color}
        />
      );
    }
  );
  return (
    <div className="categories-wrapper">
      <h1>Kategorie główne</h1>
      <div className="categories-box">{renderCategories}</div>
    </div>
  );
};
