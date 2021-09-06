import React, { Fragment } from "react";

function Navbar(props) {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <span className="navbar-brand" href="#">
            Rick and Morty App
          </span>
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
