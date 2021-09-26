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
  return (
    <>
      {/* <IconContext.Provider value={{ color: "#fff" }}> */}
      <div className="nav"></div>
    </>
  );
};

export default Navbar;
