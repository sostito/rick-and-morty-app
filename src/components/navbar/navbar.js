import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <span className="navbar-brand" href="#">
            Rick and Morty App
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/episodes">
                Episodes
              </Link>
            </div>
          </div>
          <form className="d-flex">
            <input
              onChange={props.hadleSearch}
              className="form-control me-2"
              type="search"
              placeholder="Busqueda"
              aria-label="Search"
            ></input>
          </form>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
