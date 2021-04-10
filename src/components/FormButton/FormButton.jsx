import React from "react";
import cns from 'classnames';

import "./FormButton.css";

const FormButton = ({ title, onClick, className, disabled }) => {
  return <button className={cns("form-button", className && className, disabled && "form-button_disabled")} onClick={onClick} type="submit" disabled={disabled}>{title}</button>;
};


export default FormButton;