import "./Dropdown.scss";
import { MenuItems } from "./MenuItems";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [dropClick, setDropClick] = useState(false);

  const handleDropClick = () => setDropClick(!dropClick);

  return (
    <ul
      onClick={handleDropClick}
      className={dropClick ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      {MenuItems.map((item, index) => {
        return (
          <li key={index} className="dropdown-menu__li">
            <Link
              className={item.cName}
              to={item.path}
              onClick={() => setDropClick(false)}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
