import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NewsNavbar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {user && (
        <nav className="header mx-5">
          <ul>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/technology">Technology</Link>
            </li>
            <li>
              <Link to="/crypto">Crypto</Link>
            </li>
            <li>
              <Link to="/sports">Sports</Link>
            </li>
            <li>
              <Link to="/entertainment">Entertainment</Link>
            </li>
            <li>
              <Link to="/financial">Financial</Link>
            </li>
            <li>
              <Link to="/politics">Politics</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NewsNavbar;
