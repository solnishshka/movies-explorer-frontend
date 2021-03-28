import React from "react";

import FormButton from "../FormButton";
import Logo from "../Logo";
import { Link } from "react-router-dom";

import "./Form.css";

const Form = ({ type, title, link, linkTitle, text }) => {
  return (
    <form className="form">
      <Link to="/">
        <Logo className="form__logo" />
      </Link>
      <h2 className="form__title">{title}</h2>
      {type === "signup" && (
        <>
          <label className="form__label" htmlFor="name">
            Имя
          </label>
          <input
            className="form__input form__input_type_name"
            type="text"
            name="name"
            id="name"
          />
          <span className="form__input-error" id="name-error"></span>
        </>
      )}
      <label className="form__label" htmlFor="email">
        Email
      </label>
      <input
        className="form__input form__input_type_email"
        type="email"
        name="email"
        id="email"
      />
      <span className="form__input-error" id="email-error"></span>
      <label className="form__label" htmlFor="password">
        Пароль
      </label>
      <input
        className="form__input form__input_type_password"
        type="password"
        name="password"
        id="password"
      />
      <span className="form__input-error" id="password-error"></span>
      {type === "signup" ? (
        <FormButton title="Зарегистрироваться" />
      ) : (
        <FormButton title="Войти" />
      )}
      <p className="form__text">
        {text}
        <Link className="form__link" to={link}>
          {linkTitle}
        </Link>
      </p>
    </form>
  );
};

export default Form;
