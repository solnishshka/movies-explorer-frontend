import React, { useState, memo } from "react";
import Logo from "../Logo";
import Navigation from "../Navigation";
import "./Header.css";

const Header = ({ type, auth = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={type ? `header header_type_${type}` : "header"}>
      <div className="header__container">
        <a href="/">
          <Logo className="header__logo" />
        </a>
        {auth && (
          <Navigation
            className={
              isMenuOpen
                ? `header__navigation header__navigation_opened`
                : "header__navigation"
            }
            isOpen={isMenuOpen}
            onClick={handleMenuOpen}
          />
        )}
        {!auth && (
          <ul className="header__links">
            <li className="header__link-item">
              <a className="header__link" href="/signup">
                Регистрация
              </a>
            </li>
            <li className="header__link-item">
              <a
                className="header__link header__link_type_button"
                href="/signin"
              >
                Войти
              </a>
            </li>
          </ul>
        )}
        {auth && (
          <button
            className="header__menu-button"
            onClick={handleMenuOpen}
            type="button"
          ></button>
        )}
      </div>
    </header>
  );
};

export default memo(Header);
