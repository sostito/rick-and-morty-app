import React from "react";
import { Link } from "react-router-dom";

function Pagination(props) {
  function getPages() {
    let pages = [];

    for (let index = 1; index <= props.numberPages; index++) {
      pages.push(
        <li
          key={index}
          className={`page-item ${
            Number(props.activePage) === index ? "active" : ""
          }`}
          aria-current="page"
        >
          <Link
            className="page-link"
            to={`/episodes/${index}`}
            onClick={props.nextPage}
          >
            {index}
          </Link>
        </li>
      );
    }
    return pages;
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <Link className="page-link" to="/">
            Previous
          </Link>
        </li>
        {getPages()}
        <li className="page-item disabled">
          <Link className="page-link" to="/">
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
