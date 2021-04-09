import React, { useState, useEffect, useCallback } from "react";

import { inputValidator } from "../../utils/validators";
import { validationErrors } from "../../config/error-messages";

import FormButton from "../FormButton";
import Logo from "../Logo";
import { Link } from "react-router-dom";

import "./Form.css";

const Form = ({ type, title, link, linkTitle, text, onRegister, onLogin }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: {
      required: true,
      minLength: true,
      maxLength: true,
      containSymbols: true,
    },
    email: {
      required: true,
      invalidEmail: true,
    },
    password: {
      required: true,
      minLength: true,
      maxLength: true,
    },
  });
  const [isValidationStart, setIsValidationStart] = useState({
    name: type === "signup" ? false : true,
    email: false,
    password: false,
  });

  const handleChange = useCallback(
    (evt) => {
      const { name, value } = evt.target;

      setFormValues((prevState) => ({ ...prevState, [name]: value }));
      setIsValidationStart((prevState) => ({ ...prevState, [name]: true }));
    },
    [setFormValues, setIsValidationStart]
  );

  const { name, email, password } = formValues;

  useEffect(() => {
    const nameIsValid = inputValidator(name, "name", isValidationStart.name);
    const emailIsValid = inputValidator(
      email,
      "email",
      isValidationStart.email
    );
    const passwordIsValid = inputValidator(
      password,
      "password",
      isValidationStart.password
    );

    setErrors({
      name: nameIsValid,
      email: emailIsValid,
      password: passwordIsValid,
    });
  }, [
    name,
    email,
    password,
    setErrors,
    isValidationStart.email,
    isValidationStart.name,
    isValidationStart.password,
  ]);

  const nameInvalid =
    Boolean(type === "signup") && Object.values(errors.name).some(Boolean);
  const emailInvalid = Object.values(errors.email).some(Boolean);
  const passwordInvalid = Object.values(errors.password).some(Boolean);

  const isDisabled =
    nameInvalid ||
    emailInvalid ||
    passwordInvalid ||
    !isValidationStart.name ||
    !isValidationStart.email ||
    !isValidationStart.password;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (onRegister) {
      onRegister(name, email, password);
    } else if (onLogin) {
      onLogin(email, password);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
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
            onChange={handleChange}
          />
          {errors.name.required && (
            <span className="form__input-error" id="name-error">
              {validationErrors.required}
            </span>
          )}
          {errors.name.containSymbols && (
            <span className="form__input-error" id="name-error">
              {validationErrors.name}
            </span>
          )}
          {errors.name.minLength && (
            <span className="form__input-error" id="name-error">
              {validationErrors.minLength}
            </span>
          )}
          {errors.name.maxLength && (
            <span className="form__input-error" id="name-error">
              {validationErrors.maxLength}
            </span>
          )}
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
        onChange={handleChange}
      />
      {errors.email.required && (
        <span className="form__input-error" id="name-error">
          {validationErrors.required}
        </span>
      )}
      {errors.email.invalidEmail && (
        <span className="form__input-error" id="name-error">
          {validationErrors.email}
        </span>
      )}
      <label className="form__label" htmlFor="password">
        Пароль
      </label>
      <input
        className="form__input form__input_type_password"
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
      />
      {errors.password.required && (
        <span className="form__input-error" id="name-error">
          {validationErrors.required}
        </span>
      )}
      {errors.password.minLength && (
        <span className="form__input-error" id="name-error">
          {validationErrors.minLength8}
        </span>
      )}
      {errors.password.maxLength && (
        <span className="form__input-error" id="name-error">
          {validationErrors.maxLength}
        </span>
      )}
      <FormButton
        title={type === "signup" ? "Зарегистрироваться" : "Войти"}
        disabled={isDisabled}
      />
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
