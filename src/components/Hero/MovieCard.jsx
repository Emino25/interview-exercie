import React from 'react';
import { Button } from '../Common';

const MovieCard = ({ movie }) => {
  const movieReleaseYear = movie?.release_date.substring(0, 4);

  return (
    <div
      className="h-full w-full relative overflow-hidden flex rounded-md md:text-lg"
    >
      <img className='w-full h-[175%]' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
      <div className="absolute z-10 flex flex-col gap-4 bottom-4 left-4">
        <div className="flex text-white gap-2">
          <div className="font-extrabold">{movie.title}</div>
          <div>({movieReleaseYear})</div>
        </div>
        <div className="flex gap-4">
          <Button backgroundColor={'white'} text={'Regarder'} />
          <Button text={'En savoir plus'} textColor={'white'} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
