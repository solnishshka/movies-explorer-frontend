import React, { useState } from "react";
import FilterCheckbox from "../FilterCheckbox";
import "./SearchForm.css";

const SearchForm = ({ onSearch }) => {
  const [isShort, setIsShort] = useState(false);
  const [request, setRequest] = useState("");
  const [error, setError] = useState(false);

  const handleToggleFilter = () => {
    setIsShort(!isShort);
  };

  const handleRequestChange = (evt) => {
    setRequest(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (request === "") {
      setError(true);
    } else {
      setError(false);
      onSearch(request, isShort);
    }
  };

  return (
    <div className="search-form__wrapper">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form__input-container">
          <input
            className="search-form__input"
            placeholder="Фильм"
            value={request}
            onChange={handleRequestChange}
          />
          {error && (
            <span className="search-form__error">
              Нужно ввести ключевое слово
            </span>
          )}
          <button className="search-form__search-button" type="submit"></button>
        </div>
        <FilterCheckbox handleToggleFilter={handleToggleFilter} />
      </form>
    </div>
  );
};

export default SearchForm;
