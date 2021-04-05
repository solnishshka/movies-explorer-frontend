import React from "react";

import "./FilterCheckbox.css";

const FilterCheckbox = ({ handleToggleFilter }) => {
  return (
    <div className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        id="filter"
        onClick={handleToggleFilter}
      />
      <label className="checkbox__label" htmlFor="filter">
        Короткометражки
      </label>
    </div>
  );
};

export default FilterCheckbox;
