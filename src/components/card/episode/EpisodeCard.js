import React from "react";

function EpisodeCard(props) {
  return (
    <div className="col-4" key={props.id}>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <div className="card-text">
            <p className="mb-0">Lanzamiento: {props.air_date}</p>
            <p className="mb-0">Identificador: {props.episode}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EpisodeCard;
