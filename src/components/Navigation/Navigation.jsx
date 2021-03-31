import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Navigation.css";

const Navigation = ({ className, isOpen, onClick }) => {
  return (
    <nav className={`menu ${className}`}>
      {isOpen && (
        <button
          className="menu__close-button"
          type="button"
          onClick={onClick}
        ></button>
      )}
      <ul className="menu__list">
        <li className="menu__list-item menu__list-item_type_main">
          <NavLink
            className="menu__link"
            exact
            to="/"
            activeClassName="menu__link_active"
          >
            Главная
          </NavLink>
        </li>
        <li className="menu__list-item">
          <NavLink
            className="menu__link"
            exact
            to="/movies"
            activeClassName="menu__link_active"
          >
            Фильмы
          </NavLink>
        </li>
        <li className="menu__list-item">
          <NavLink
            className="menu__link"
            to="/saved-movies"
            activeClassName="menu__link_active"
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
      <Link className="menu__account-link" to="/profile">
        Аккаунт
      </Link>
    </nav>
  );
};

export default Navigation;
