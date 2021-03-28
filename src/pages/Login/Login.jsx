import React from "react";

import "./Login.css";

import Form from "../../components/Form";

const Login = () => {
  return (
    <div className="login">
      <Form
        type="signin"
        title="Рады видеть!"
        text="Ещё не зарегистрированы?"
        link="/signup"
        linkTitle="Регистрация"
      />
    </div>
  );
};

export default Login;
