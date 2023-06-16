import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/">
          <h2>cooking ninja</h2>
        </Link>
        <link to="/create">create receipe</link>
      </nav>
    </div>
  );
}

export default Navbar;
