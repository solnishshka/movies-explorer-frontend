import React, { useState } from "react";

import MoviesCardList from "../../components/MoviesCardList";
import SearchForm from "../../components/SearchForm";

import moviesFinder from "../../utils/moviesFinder";

import "./SavedMovies.css";

const SavedMovies = ({ savedMovies, handleDeleteMovie }) => {
  const [result, setResult] = useState(savedMovies);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = (request, isShort) => {
    setIsSearched(true);
    setResult(moviesFinder(savedMovies, request, isShort));
  };

  return (
    <div className="saved-movies">
      <SearchForm onSearch={handleSearch} />
      <MoviesCardList
        movies={isSearched ? result : savedMovies}
        handleDeleteMovie={handleDeleteMovie}
        countMovies={savedMovies.length}
        isSearched={isSearched}
      />
    </div>
  );
};

export default SavedMovies;
