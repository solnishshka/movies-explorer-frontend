import React from "react";

import "./SectionTitle.css";

const SectionTitle = ({ title, type }) => {
  if (type === "promo") {
    return (
      <h1 className={`section-title section-title_type_${type}`}>{title}</h1>
    );
  }
  return (
    <h2 className={`section-title section-title_type_${type}`}>{title}</h2>
  );
};

export default SectionTitle;
