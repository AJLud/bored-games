import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "./Utils/api";
import { formatCategories } from "./Utils/data-manipulation";

const Nav = () => {
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  useEffect(() => {
    getCategories().then((categories) => {
      setIsLoadingCategories(false);
      setCategories(categories);
    });
  }, []);

  if (isLoadingCategories) return <p className="navbar">Loading Categories</p>;

  return (
    <nav className="navbar">
      <Link to="/">
        <button className="navbar-contents">All</button>
      </Link>
      {categories.map((category) => {
        return (
          <Link key={category.slug} to={`/category/${category.slug}`}>
            <button className="navbar-contents">
              {formatCategories(category.slug)}
            </button>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
