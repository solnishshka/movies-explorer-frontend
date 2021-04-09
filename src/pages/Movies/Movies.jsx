import React, { useEffect, useState } from "react";
import useWindowResize from "../../utils/useWindowResize";

import MoviesCardList from "../../components/MoviesCardList";
import SearchForm from "../../components/SearchForm";
import Preloader from "../../components/Preloader";

import moviesFinder from "../../utils/moviesFinder";

import "./Movies.css";

const Movies = ({
  onSearch,
  movies,
  savedMovies,
  handleAddNewMovie,
  handleDeleteMovie,
  isLoading,
}) => {
  const isWindowSize = useWindowResize();
  const [baseCountMovies, setBaseCountMovies] = useState(7);
  const [moreCountMovies, setMoreCountMovies] = useState(0);
  const [result, setResult] = useState(movies ?? []);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    if (isWindowSize === "big") {
      setBaseCountMovies(7);
    } else {
      setBaseCountMovies(5);
    }
  }, [isWindowSize]);

  const handleMoreButtonClick = () => {
    setMoreCountMovies((prevState) => prevState + 2);
  };

  const handleSearch = (request, isShort) => {
    setIsSearched(true);
    if (!movies) {
      onSearch(request, isShort, setResult);
    } else {
      setResult(moviesFinder(movies, request, isShort));
    }
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
          countMovies={baseCountMovies + moreCountMovies}
          handleAddNewMovie={handleAddNewMovie}
          handleDeleteMovie={handleDeleteMovie}
          isSearched={isSearched}
        />
      )}
      {baseCountMovies + moreCountMovies < result.length && (
        <button className="movies__more-button" onClick={handleMoreButtonClick}>
          Ещё
        </button>
      )}
    </div>
  );
};

export default Movies;
