import React from "react";
import { Link } from "react-router-dom";
import "./Notfound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className="btn btn-outline-light not-found-link">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
