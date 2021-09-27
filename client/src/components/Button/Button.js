import "./Button.scss";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/planner" className="button">
      <button className="button__btn">
        Planner <span className="button__span">3</span>
      </button>
    </Link>
  );
};

export default Button;
