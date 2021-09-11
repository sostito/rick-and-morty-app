import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            Rick and Morty App
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/episodes/1">
                Episodes
              </Link>
            </ul>
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
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
