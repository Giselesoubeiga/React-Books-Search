import React from "react";
import{Link} from "react-router-dom"

function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark mb-5">
        <a className="navbar-brand" href="#">
          Fixed navbar
        </a>
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/saved">
                Save
              </Link>
            </li>

          </ul>
        </div>
      </nav>
      <div className="container">
      <div className="jumbotron">
        <h1>Google Books Search</h1>
        <p className="lead">
        Search for and Save Books of Interest
        </p>
      </div>
      </div>
     
    </div>
  );
}

export default navbar;
