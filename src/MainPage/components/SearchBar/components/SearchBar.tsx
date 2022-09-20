import "../styles/SearchBar.scss";

export const SearchBar = () => {
  return (
    <div className="search-section">
      <div className="search-bar">
        <div className="search-input">
          <input type="text" placeholder="sporo ogloszen blisko ciebie" />
        </div>
        <div className="location-select">
          <input type="text" placeholder="Cała Polska" />
        </div>
        <div className="search-button">
          <button>Szukaj</button>
        </div>
      </div>
    </div>
  );
};
