import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink to="courses">Courses</NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "lightyellow", textDecoration: "none" } : {}
        }
        to="about"
      >
        About
      </NavLink>
      <NavLink to="contacts">Contacts</NavLink>
    </nav>
  );
};

export default Menu;
