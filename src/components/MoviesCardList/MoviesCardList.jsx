import React from "react";

import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ cards, type }) => {
  return (
    <ul className="movies__list">
      {cards.map((movie) => (
        <li className="movies__movie-item" key={movie.id}>
          <MoviesCard img={movie.img} title={movie.title} type={type} />
        </li>
      ))}
    </ul>
  );
};

export default MoviesCardList;
