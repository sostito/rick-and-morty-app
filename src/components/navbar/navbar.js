import React, { Fragment } from "react";
import { Form, FormControl, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { search } from '../../redux/searchSlice'

function NavbarSearch() {
  const dispatch = useDispatch();

  function searchCaracter(e) {
    dispatch(search({ 'searchText': e.target.value }));
  }
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Rick and Morty App
          </NavLink>
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
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/episodes/1">
                Episodes
              </NavLink>
            </ul>
            <Form className="d-flex">
              <FormControl
                onChange={searchCaracter}
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
