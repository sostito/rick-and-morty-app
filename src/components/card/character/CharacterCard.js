import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import "./CharacterCard.css";

function Target(props) {
  return (
    <Fragment>
      <Card className="mb-4" style={{ width: "10rem" }}>
        <Card.Img variant="top" src={props.image}></Card.Img>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <span className="mb-0">
              Especie: {props.species} <br />
            </span>
            <span className="mb-0">
              Genero: {props.gender} <br />
            </span>
            <span className="mb-0">
              Estado: {props.status} <br />
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default Target;
