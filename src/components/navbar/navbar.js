import React, { Fragment } from "react";
import { Form, FormControl, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarSearch(props) {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Rick and Morty App
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/episodes/1">
                Episodes
              </Link>
            </ul>
            <Form className="d-flex">
              <FormControl
                onChange={props.hadleSearch}
                className="form-control me-2"
                type="search"
                placeholder="Busqueda"
                aria-label="Search"
              ></FormControl>
            </Form>
          </div>
        </div>
      </Navbar>
    </Fragment>
  );
}

export default NavbarSearch;
