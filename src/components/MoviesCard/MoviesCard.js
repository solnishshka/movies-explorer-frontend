import React from 'react';

import './MoviesCard.css';

const MoviesCard = ({ img }) => {
  return (
    <div className="movie">
      <div className="movie__info">
        <div className="movie__description">
          <h2 className="movie__title">Роллинг Стоунз» в изгнании</h2>
          <p className="movie__duration">1ч 42м</p>
        </div>
        <button className="movie__like-button"></button>
      </div>
      <a className="movie__link" href="/"><img className="movie__image" src={img}></img></a>
    </div>
  );
}

export default MoviesCard;