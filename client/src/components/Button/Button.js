import "./Button.scss";
import { Link } from "react-router-dom";
import { AllContext } from "../../App";
import React, { useContext } from "react";

const Button = () => {
  const {
    localCart,
    setLocalCart,
    plannerCart,
    setPlannerCart,
    didChange,
    setDidChange,
  } = useContext(AllContext);

  return (
    <Link to="/planner" className="button">
      <button className="button__btn">
        Planner <span className="button__span">{localCart.length || 0}</span>
      </button>
    </Link>
  );
};

export default Button;
