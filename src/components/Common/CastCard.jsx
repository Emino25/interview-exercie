import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CastCard = ({ cast ,movie}) => {

  const navigate = useNavigate()
  return (
    <div className="flex flex-col w-1/4 gap-1 md:w-1/6 cursor-pointer" onClick={()=> {if(movie)navigate(`/details/${movie.id}`)}}>
      <img
        className="w-full aspect-[3/4] rounded-sm"
        src={`https://image.tmdb.org/t/p/original${cast?.profile_path||movie?.poster_path}`}
        alt=""
        />
      <div className="text-white text-xl">{cast?.name || movie?.title}</div>
      <div className="text-[#9B9B9B] text-sm">{cast?.name}</div>
    </div>
  );
};

export default CastCard;
