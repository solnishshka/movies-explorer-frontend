import React from "react";

import "./MoviesCard.css";

const MoviesCard = ({ img, title, type }) => {
  return (
    <div className="movie">
      <div className="movie__info">
        <div className="movie__description">
          <h2 className="movie__title">{title}</h2>
          <p className="movie__duration">1ч 42м</p>
        </div>
        <button
          className={
            type === "movie" ? "movie__like-button" : "movie__dislike-button"
          }
        ></button>
      </div>
      <img className="movie__image" src={img} alt={title}></img>
    </div>
  );
};

export default MoviesCard;
