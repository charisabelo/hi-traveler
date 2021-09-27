import "./Navbar.scss";
import { useState, useEffect, React } from "react";
import { Link } from "react-router-dom";
import { GoThreeBars, GoX } from "react-icons/go";
import { FaCaretDown } from "react-icons/fa";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import { useTransition, animated } from "react-spring";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isTablet, setTablet] = useState(false);

  const transition = useTransition(dropdown, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  // useEffect(() => {
  //   function handleResize() {
  //     if (window.innerWidth > 768) {
  //       setTablet(false);
  //     }
  //   }
  //   window.addEventListener("resize", handleResize);
  // });

  function handleResize() {
    if (window.innerWidth < 768) {
      setTablet(true);
    } else {
      setTablet(false);
    }
  }

  window.addEventListener("resize", handleResize);

  return (
    <nav className="nav">
      <div className="nav__logo-container">
        {/* <div className="nav__logo-icon"></div> */}
        <Link to="/" onClick={closeMobileMenu}>
          <div className="nav__logo"></div>
        </Link>
      </div>
      <div
        className="nav__bars-container nav__bars-container--desktop"
        onClick={handleClick}
      >
        {click ? (
          <GoX className="nav__x-icon" />
        ) : (
          <GoThreeBars className="nav__bars-icon" />
        )}
      </div>
      <ul className={click ? "nav__menu active" : "nav__menu"}>
        <li className="nav__menu-item">
          <Link to="/" className="nav__link" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav__menu-item">
          <Link to="/all" className="nav__link" onClick={closeMobileMenu}>
            All
          </Link>
        </li>
        {isTablet ? (
          <>
            <li className="nav__menu-item">
              <Link
                to="/restaurants"
                className="nav__link"
                onClick={closeMobileMenu}
              >
                Restaurants
              </Link>
            </li>
            <li className="nav__menu-item">
              <Link
                to="/thingstodo"
                className="nav__link"
                onClick={closeMobileMenu}
              >
                Things To Do
              </Link>
            </li>
            <li className="nav__menu-item">
              <Link to="/tours" className="nav__link" onClick={closeMobileMenu}>
                Tours
              </Link>
            </li>
          </>
        ) : (
          <li
            className="nav__menu-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="#" className="nav__link dropdown">
              Categories <FaCaretDown className="nav__link-caret" />
            </Link>

            {transition((style, item) => {
              return item ? (
                <animated.div className="item" style={style}>
                  <Dropdown />
                </animated.div>
              ) : (
                ""
              );
            })}
          </li>
        )}
        <li className="nav__menu-item nav__menu-item--btn">
          <Link
            to="/planner"
            className="nav__link nav__link--container nav__link--mobile"
            onClick={closeMobileMenu}
          >
            Planner <span className="nav__link-span">3</span>
          </Link>
        </li>
      </ul>
      <Button className="nav__btn nav__mobile" />
    </nav>
  );
};

export default Navbar;
