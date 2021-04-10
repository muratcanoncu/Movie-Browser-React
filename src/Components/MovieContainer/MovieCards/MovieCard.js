import React from "react";

function MovieCard(props) {
  return (
    <div className="movieCard">
      <img src={props.poster} className="w-100 h-50"></img>
      <div>
        <h4>{props.movieName}</h4>
        <p>{props.plot}</p>
      </div>
      <h5>Rate: {props.rate}</h5>
    </div>
  );
}

export default MovieCard;
