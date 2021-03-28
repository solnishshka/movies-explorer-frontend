import React from "react";
import "./Movies.css";
import MoviesCardList from "../../components/MoviesCardList";
import CARD_MOCK from "./mock";
import SearchForm from "../../components/SearchForm";

const Movies = () => {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList cards={CARD_MOCK} type="movie" />
      <button className="movies__more-button">Ещё</button>
    </div>
  );
};

export default Movies;
