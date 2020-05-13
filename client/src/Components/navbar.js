import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark mb-5">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Books Search
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/saved">
                  Saved Books
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="jumbotron">
          <h1>Google Books Search</h1>
          <p className="lead">Search for and Save Books of Interest</p>
        </div>
      </div>
    </div>
  );
}

export default navbar;
