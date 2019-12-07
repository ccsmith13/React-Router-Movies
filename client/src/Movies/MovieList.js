import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieList = props => {
  const [movies, setMovies] = useState([]);
  //console.log(movies);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`movies/${movie.id}`} key={movie.id}>
          <MovieDetails key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
};

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <MovieCard
      title2={title}
      director2={director}
      metascore2={metascore}
      stars2={stars}
    />
  );
}

export default MovieList;
