import React from 'react';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className="error-page">
      <h1 className="error-page__title">404</h1>
      <p className="error-page__description">Страница не найдена</p>
      <a className="error-page__link" href="/">Назад</a>
    </div>
  );
}

export default PageNotFound;