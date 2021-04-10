import React, { useState, useContext, useEffect, useCallback } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import { inputValidator } from "../../utils/validators";
import { validationErrors } from "../../config/error-messages";

import FormButton from "../../components/FormButton";
import "./Profile.css";

const Profile = ({ handleProfileUpdate, handleLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
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
  });
  const [isValidationStart, setIsValidationStart] = useState({
    name: false,
    email: false,
  });

  useEffect(() => {
    if (currentUser.name && currentUser.email) {
      setFormValues({ name: currentUser.name, email: currentUser.email });
    }
  }, [currentUser]);

  const handleSaveFormdata = () => {
    handleProfileUpdate(formValues.name, formValues.email);
    setIsEdit(false);
  };

  const handleToggleEditMode = () => {
    if (isEdit) {
      setFormValues({ name: currentUser.name, email: currentUser.email });
    }
    setIsEdit(!isEdit);
  };

  const handleChange = useCallback(
    (evt) => {
      const { name, value } = evt.target;

      setFormValues((prevState) => ({ ...prevState, [name]: value }));
      setIsValidationStart((prevState) => ({ ...prevState, [name]: true }));
    },
    [setFormValues, setIsValidationStart]
  );

  const { name, email } = formValues;

  useEffect(() => {
    const nameIsValid = inputValidator(name, "name", isValidationStart.name);
    const emailIsValid = inputValidator(
      email,
      "email",
      isValidationStart.email
    );

    setErrors({
      name: nameIsValid,
      email: emailIsValid,
    });
  }, [name, email, setErrors, isValidationStart.name, isValidationStart.email]);

  const nameInvalid = Object.values(errors.name).some(Boolean);
  const emailInvalid = Object.values(errors.email).some(Boolean);

  const isDisabled =
    nameInvalid ||
    emailInvalid ||
    (currentUser.name === name && currentUser.email === email);

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <div className="profile__input-item">
          <label className="profile__label" htmlFor="name">
            Имя
          </label>
          <input
            className="profile__input"
            type="text"
            name="name"
            id="name"
            value={name}
            readOnly={!isEdit}
            onChange={handleChange}
          />
        </div>
        {errors.name.required && (
          <span className="profile__input-error" id="name-error">
            {validationErrors.required}
          </span>
        )}
        {errors.name.containSymbols && (
          <span className="profile__input-error" id="name-error">
            {validationErrors.name}
          </span>
        )}
        {errors.name.minLength && (
          <span className="profile__input-error" id="name-error">
            {validationErrors.minLength}
          </span>
        )}
        {errors.name.maxLength && (
          <span className="profile__input-error" id="name-error">
            {validationErrors.maxLength}
          </span>
        )}
        <div className="profile__input-item">
          <label className="profile__label" htmlFor="email">
            Email
          </label>
          <input
            className="profile__input"
            type="email"
            name="email"
            id="email"
            value={email}
            readOnly={!isEdit}
            onChange={handleChange}
          />
        </div>
        {errors.email.required && (
          <span className="profile__input-error" id="name-error">
            {validationErrors.required}
          </span>
        )}
        {errors.email.invalidEmail && (
          <span className="profile__input-error" id="name-error">
            {validationErrors.email}
          </span>
        )}
        {isEdit && (
          <>
            <FormButton
              className="profile__save-button"
              title="Сохранить"
              onClick={handleSaveFormdata}
              form="profile-form"
              disabled={isDisabled}
            />
            <button
              type="button"
              className="profile__cancel-button"
              onClick={handleToggleEditMode}
            >
              Отмена
            </button>
          </>
        )}
        {!isEdit && (
          <>
            <button
              type="button"
              className="profile__edit-button"
              onClick={handleToggleEditMode}
            >
              Редактировать
            </button>
            <button
              className="profile__logout-button"
              type="button"
              onClick={handleLogout}
            >
              Выйти из аккаунта
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Profile;
