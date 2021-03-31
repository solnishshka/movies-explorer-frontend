import React from "react";
import FilterCheckbox from "../FilterCheckbox";
import "./SearchForm.css";

const SearchForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  }
  return (
    <div className="search-form__wrapper">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form__input-container">
          <input className="search-form__input" placeholder="Фильм" required></input>
          <button className="search-form__search-button" type="submit"></button>
        </div>
        <FilterCheckbox />
      </form>
    </div>
  );
};

export default SearchForm;
