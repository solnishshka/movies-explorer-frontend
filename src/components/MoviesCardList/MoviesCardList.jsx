import React from "react";

import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({
  movies,
  savedMovies,
  type,
  countMovie,
  handleAddNewMovie,
  handleDeleteMovie,
  isSearched,
}) => {
  if (!movies.length && isSearched) {
    return <div className="movies__not-found">Ничего не найдено</div>;
  }
  if (!movies.length) {
    return "";
  }
  return (
    <ul className="movies__list">
      {movies
        .filter((item, id) => id < countMovie)
        .map((movie) => (
          <li className="movies__movie-item" key={movie.movieId}>
            <MoviesCard
              movie={movie}
              savedMovies={savedMovies}
              type={type}
              handleAddNewMovie={handleAddNewMovie}
              handleDeleteMovie={handleDeleteMovie}
            />
          </li>
        ))}
    </ul>
  );
};

export default MoviesCardList;
