import React from 'react';

import './SectionTitle.css';

const SectionTitle = ({ title, type }) => {
  return <h1 className={`section-title section-title_type_${type}`}>{title}</h1>;
}

export default SectionTitle;