import React, { useState } from "react";

import FormButton from "../../components/FormButton";
import "./Profile.css";

const Profile = ({ name }) => {
  const error = "";
  const [isEdit, setIsEdit] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "Анастасия",
    email: "test@example.com",
  });

  const handleToggleEditMode = () => {
    setIsEdit(!isEdit);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <h2 className="profile__title">Привет, {name}!</h2>
        <div className="profile__input-item">
          <label className="profile__label" htmlFor="name">
            Имя
          </label>
          <input
            className="profile__input"
            type="text"
            name="name"
            id="name"
            value={formValues.name}
            readOnly={!isEdit}
            onChange={handleChange}
          />
        </div>
        <div className="profile__input-item">
          <label className="profile__label" htmlFor="email">
            Email
          </label>
          <input
            className="profile__input"
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            readOnly={!isEdit}
            onChange={handleChange}
          />
        </div>
        {isEdit && error && (
          <span className="profile__form-error">{error}</span>
        )}
        {isEdit && (
          <FormButton
            className="profile__save-button"
            title="Сохранить"
            onClick={handleToggleEditMode}
          />
        )}
        {!isEdit && (
          <>
            <button
              className="profile__edit-button"
              onClick={handleToggleEditMode}
            >
              Редактировать
            </button>
            <button className="profile__logout-button">
              Выйти из аккаунта
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Profile;
