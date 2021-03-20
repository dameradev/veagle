import React from "react";
import { Link } from "gatsby";
import { HeaderStyles } from "../styles/header";

const Header = ({ isHomepage }) => {
  const homepageClass = isHomepage ? "homepage-header" : "";
  return (
    <HeaderStyles className={`site-header ${homepageClass}`}>
      <Link to="/">
        <div className="logo">Veagle photography</div>
      </Link>
      <nav>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/more-info">More Info</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  );
};

export default Header;
