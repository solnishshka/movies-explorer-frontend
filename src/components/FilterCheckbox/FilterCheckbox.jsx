import React, { forwardRef } from "react";

import "./FilterCheckbox.css";

const FilterCheckbox = forwardRef((props, ref) => {
  return (
    <div className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        id="filter"
        ref={ref}
      />
      <label className="checkbox__label" htmlFor="filter">
        Короткометражки
      </label>
    </div>
  );
});

FilterCheckbox.displayName = "FilterCheckbox";

export default FilterCheckbox;
