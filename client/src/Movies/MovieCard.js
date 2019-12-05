import React from "react";

const MovieCard = props => {
  return (
    <div className="movie-card">
      <h2>{props.title2}</h2>
      <div className="movie-director">
        Director: <em>{props.director2}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.metascore2}</strong>
      </div>
      <h3>Actors</h3>

      {props.stars2.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
