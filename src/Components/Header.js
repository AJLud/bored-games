import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="Header-Title">Bored Games</h1>
      </Link>
      <p className="user-header">JessJelly</p>
    </div>
  );
};

export default Header;
