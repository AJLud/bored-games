import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "./Utils/api";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <div className="Navbar">
      <button className="navbar-contents">All</button>
      {categories.map((category) => {
        return (
          <Link key={category.slug}>
            <button className="navbar-contents">{category.slug}</button>
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
