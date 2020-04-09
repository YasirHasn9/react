// in common we put the comp that not specific to a specific one

import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  const activeStyle = { color: "#f15b2a" };
  return (
    <nav>
      {/* this like will only receive the active style on the home link */}
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>{" "}
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Course
      </NavLink>{" "}
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
}

export default Header;
