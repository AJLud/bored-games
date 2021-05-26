import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="Header-Title">Bored Games</h1>
      </Link>
      <div className="user-info">
        <p className="user-header">{user.username}</p>
        <img
          src={user.avatar_url}
          alt={user.username}
          className="user-avatar"
        />
      </div>
    </div>
  );
};

export default Header;
