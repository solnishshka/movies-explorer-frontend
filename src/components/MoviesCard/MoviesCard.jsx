import React, { useEffect, useState } from "react";
import { getTimeFromMins } from "../../utils/getTimeFromMins";
import "./MoviesCard.css";
import checkMovie from "../../utils/checkMovie";

const MoviesCard = ({
  movie,
  type = "saved",
  handleAddNewMovie,
  handleDeleteMovie,
  savedMovies,
}) => {
  const duration = getTimeFromMins(movie.duration);
  const [id, setId] = useState(movie._id || "");

  useEffect(() => {
    if (type === "movie") {
      setId(checkMovie(movie, savedMovies));
    }
  }, [savedMovies, movie, type]);

  const handleClick = () => {
    if (id) {
      handleDeleteMovie(id);
    } else {
      handleAddNewMovie(movie);
    }
  };

  return (
    <div
      className="movie"
      href={movie.trailerLink}
      target="_blank"
      rel="noreferrer"
    >
      <div className="movie__info">
        <div className="movie__description">
          <h2 className="movie__title">{movie.nameRU}</h2>
          <p className="movie__duration">{duration}</p>
        </div>
        <button
          onClick={handleClick}
          className={
            type === "movie"
              ? id
                ? "movie__like-button"
                : "movie__like-button-empty"
              : "movie__dislike-button"
          }
        ></button>
      </div>
      <img className="movie__image" src={movie.image} alt={movie.nameRU}></img>
    </div>
  );
};

export default MoviesCard;
