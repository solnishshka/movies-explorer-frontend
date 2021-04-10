import React from "react";

import "./Register.css";

import Form from "../../components/Form";

const Register = ({ handleRegister }) => {
  return (
    <div className="register">
      <Form
        type="signup"
        title="Добро пожаловать!"
        text="Уже зарегистрированы?"
        link="/signin"
        linkTitle="Войти"
        onRegister={handleRegister}

      />
    </div>
  );
};

export default Register;
