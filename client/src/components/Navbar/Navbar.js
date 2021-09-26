import "./Navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GoThreeBars, GoX } from "react-icons/go";
import { FaHome, FaMarker } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { AiFillCalendar } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* <IconContext.Provider value={{ color: "#fff" }}> */}
      <div className="nav">
        <div
          className={
            !sidebar ? "nav__bars-container" : "nav__bars-container hidden"
          }
          onClick={showSidebar}
        >
          <Link to="#" className="nav__bars-link">
            <GoThreeBars className="nav__bars" />
          </Link>
        </div>
        <nav className="nav__nav">
          <ul
            className={
              sidebar ? "nav__menu-items" : "nav__menu-items nav__hidden"
            }
          >
            <Link to="#" className="nav__x-icon-container">
              <li className="nav--toggle">
                <GoX className="nav__x-icon" onClick={showSidebar} />
              </li>
            </Link>
            <Link to="/" className="nav__item-container">
              <li className="nav__item">
                <FaHome className="nav__item-icon" />
                <span className="nav__item-title">Dashboard</span>
              </li>
            </Link>
            <Link to="/leads" className="nav__item-container">
              <li className="nav__item">
                <IoIosPeople className="nav__item-icon" />
                <span className="nav__item-title">Leads</span>
              </li>
            </Link>
            <Link to="/transactions" className="nav__item-container">
              <li className="nav__item">
                <GiReceiveMoney className="nav__item-icon" />
                <span className="nav__item-title">Transactions</span>
              </li>
            </Link>
            <Link to="/calendar" className="nav__item-container">
              <li className="nav__item">
                <AiFillCalendar className="nav__item-icon" />
                <span className="nav__item-title">Calendar</span>
              </li>
            </Link>
            <Link to="/todos" className="nav__item-container">
              <li className="nav__item">
                <FaMarker className="nav__item-icon nav__item-icon--smaller" />
                <span className="nav__item-title">Daily Todos</span>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default Navbar;
