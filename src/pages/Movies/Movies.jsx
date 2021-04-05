import React, { useState } from "react";

import MoviesCardList from "../../components/MoviesCardList";
import SearchForm from "../../components/SearchForm";
import Preloader from "../../components/Preloader";

import { moviesFinder } from "../../utils/moviesFinder";

import "./Movies.css";

const Movies = ({
  onSearch,
  movies,
  savedMovies,
  handleAddNewMovie,
  handleDeleteMovie,
  isLoading,
}) => {
  const [countMovie, setCountMovie] = useState(7);
  const [result, setResult] = useState(movies);
  const [isSearched, setIsSearched] = useState(false);

  const handleMoreButtonClick = () => {
    setCountMovie((prevState) => prevState + 2);
  };

  const handleSearch = (request, isShort) => {
    setIsSearched(true);
    onSearch();
    setResult(moviesFinder(movies, request, isShort));
  };

  return (
    <div className="movies">
      <SearchForm onSearch={handleSearch} />
      {isLoading && <Preloader />}
      {!isLoading && (
        <MoviesCardList
          movies={result}
          savedMovies={savedMovies}
          type="movie"
          countMovie={countMovie}
          handleAddNewMovie={handleAddNewMovie}
          handleDeleteMovie={handleDeleteMovie}
          isSearched={isSearched}
        />
      )}
      {countMovie < result.length && (
        <button className="movies__more-button" onClick={handleMoreButtonClick}>
          Ещё
        </button>
      )}
    </div>
  );
};

export default Movies;
