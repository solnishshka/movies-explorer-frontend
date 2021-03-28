import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../../components/MoviesCardList";
import CARD_MOCK from "./mock";
import SearchForm from "../../components/SearchForm";

const SavedMovies = () => {
  return (
    <div className="saved-movies">
      <SearchForm />
      <MoviesCardList cards={CARD_MOCK} type="saved" />
    </div>
  );
};

export default SavedMovies;
