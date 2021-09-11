import React, { Fragment } from "react";
import "./CharacterCard.css";

function Target(props) {
  return (
    <Fragment>
      <div className="card mb-4">
        <img src={props.image} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <div className="card-text">
            <p className="mb-0">Especie: {props.species}</p>
            <p className="mb-0">Genero: {props.gender}</p>
            <p className="mb-0">Estado: {props.status}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Target;
