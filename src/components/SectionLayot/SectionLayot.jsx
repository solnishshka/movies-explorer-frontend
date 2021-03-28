import React from "react";

import "./SectionLayot.css";

const SectionLayot = ({ title, children, type }) => {
  return (
    <section className={`section section_type_${type}`} id={`${type}`}>
      <div className={`section__container section__container_type_${type}`}>
        <h3 className="section__name">{title}</h3>
        <div className={`section__content section__content_type_${type}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionLayot;
