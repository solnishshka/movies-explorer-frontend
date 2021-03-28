import React from "react";

import "./Register.css";

import Form from "../../components/Form";

const Register = () => {
  return (
    <div className="register">
      <Form
        type="signup"
        title="Добро пожаловать!"
        text="Уже зарегистрированы?"
        link="/signin"
        linkTitle="Войти"
      />
    </div>
  );
};

export default Register;
