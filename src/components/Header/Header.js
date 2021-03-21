import React from 'react';
import Logo from '../Logo';
import './Header.css';

const Header = ({ type }) => {
  return (
    <header className={type ? `header header_type_${type}` : "header"}>
      <div className="header__container">
        <a href="/">
          <Logo />
        </a>
        <ul className="header__links">
          <li className="header__link-item"><a className="header__link" href="/signin">Регистрация</a></li>
          <li className="header__link-item"><a className="header__link header__link_type_button" href="/signup">Войти</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;