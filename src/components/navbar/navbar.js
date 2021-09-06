import React, { Fragment } from "react";

function Navbar(props) {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <span className="navbar-brand" href="#">
            Rick and Morty App
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex mx-auto">
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
