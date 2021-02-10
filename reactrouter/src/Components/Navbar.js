import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container navbar">
        <Link className="brand-logo" to="/">
          Poke' Times
        </Link>
        <ul className="right">
          <Tooltip title="Takes you Home">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </Tooltip>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
