import React from 'react';
import { Link } from 'react-router-dom';
import { MovieRate } from '../Common';

const MovieCard = ({ movie, rate = false}) => {
  return (
    <Link to={`details/${movie.id}`}>
      <div className={`h-full flex flex-col`}>
        <img
          className="h-full aspect-auto rounded-md"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
        />
        <div className="text-white">{movie.title}</div>
        {movie.duration && <div>{movie.duration}</div>}
        {rate && <MovieRate rate={movie.vote_average} />}
      </div>
    </Link>
  );
};

export default MovieCard;
