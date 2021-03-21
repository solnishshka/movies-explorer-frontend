import React from 'react';
import searchIcon from '../../images/search-icon.svg';
import './Movies.css';
import MoviesCardList from '../../components/MoviesCardList';
import CARD_MOCK from './mock'; 

const Movies = () => {
  return (
    <div className="movies">
      <div className="movies__search-container">
        <form className="movies__search-form">
          <img className="movies__search-icon" src={searchIcon} />
          <input className="movies__search-input" placeholder="Фильм"></input>
          <button className="movies__search-button"></button>
          <div className="movies__search-filter">
            <button className="movies__search-filter-button">
              <svg className="movies__search-filter-toggler" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8" fill="#2BE080"/>
                <circle cx="8" cy="8" r="7.5" stroke="white"/>
              </svg>
            </button>
            <p className="movies__search-filter-description">Короткометражки</p>
          </div>
        </form>
      </div>
      <MoviesCardList cards={CARD_MOCK} />
      <button className="movies__more-button">Ещё</button>
    </div>
  );
}

export default Movies;