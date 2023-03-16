import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SuggestionMovieCard = ({ movie ,OutOfFocusHandler}) => {
  const navigate = useNavigate()
  return (
    <Link to={`details/${movie.id}`}>
      <div
        className="flex h-14 gap-2 w-full items-end overflow-clip hover:bg-[rgba(0,0,0,0.2)] p-2"
      onClick={()=>{OutOfFocusHandler()}}
      >
        <img
          className="h-full aspect-square"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt=""
        />
        <div className="flex flex-col">
          <div className="">{movie.title}</div>
          <div className="text-sm">{movie.release_date.substring(0, 4)}</div>
        </div>
      </div>
    </Link>
  );
};

export default SuggestionMovieCard;
