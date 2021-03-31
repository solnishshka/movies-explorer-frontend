import React from "react";

import "./FormButton.css";

const FormButton = ({ title, onClick, className }) => {
  return <button className={`form-button ${className}`} onClick={onClick} type="submit">{title}</button>;
};


export default FormButton;