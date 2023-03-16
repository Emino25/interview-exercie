import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  AiOutlineStar,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from 'react-icons/ai';

import { Button, MovieRate, CastCard } from '../components/Common';
import MoviesSlider from '../components/MoviesSlider';

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(false);
  const [movieCrew, setMovieCrew] = useState(false);
  const [movieVideos, setMovieVideos] = useState(false);
  const [movieCast, setMovieCast] = useState(false);
  const [showAllCasts, setShowAllCasts] = useState(false);
  const movieReleaseYear = movie?.release_date?.substring(0, 4);
  const runtime = {
    hour: Math.trunc(movie.runtime / 60),
    min: movie.runtime % 60,
  };

  const backgroundHandler = (url) => {
    document.querySelector(
      '.background'
    ).style.backgroundImage = `linear-gradient(to bottom, transparent 0% , transparent 60% , #2B2B2B 100%),url('https://image.tmdb.org/t/p/original${url}')`;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=41bd9a01963c8bd035dfc919502661a9&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        backgroundHandler(data.poster_path);
        setMovie(data);
      });
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=41bd9a01963c8bd035dfc919502661a9&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        const crew = data.crew.filter(
          (el) => el.job === 'Director' || el.department === 'Writing'
        );
        setMovieCrew(crew);
        setMovieCast(data.cast);
      });
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=41bd9a01963c8bd035dfc919502661a9&language=en-US`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setMovieVideos(results);
      });
  }, [id]);

  return (
    <div className="flex flex-col my-10  gap-14 md:gap-36">
      <div className="flex flex-col mx-5 gap-14 md:flex-row-reverse">
        <img
          className="w-full aspect-auto rounded-md md:w-1/2"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
        />
        <div className="w-full h-max relative gap-10 flex flex-col text-white">
          <div className="flex justify-between">
            <div className="text-2xl font-bold">
              {movie.title}
              <span> ({movieReleaseYear})</span>
            </div>
            <div className="border self-start px-2 text-sm py-[2px] right-0 rounded-md border-white">
              PG
            </div>
          </div>
          <div className="flex flex-col w-full gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 w-full flex-wrap">
                {movie &&
                  movie.genres.map((genre, i) => (
                    <div key={i}>
                      {genre.name}
                      {i != movie.genres.length - 1 ? ', ' : ''}
                    </div>
                  ))}
              </div>
              <div className="w-3/4">
                <div className="flex gap-4">
                  <div className="whitespace-nowrap">
                    {runtime.hour}h {runtime.min}min
                  </div>
                  <MovieRate rate={movie && movie.vote_average} />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button text={'Regarder'} backgroundColor={'white'} />
              <Button
                icon={<AiOutlineStar />}
                textColor={'white'}
                fontSize={'24px'}
              />
            </div>
          </div>
          <div className="text-lg">
            <div className="font-bold">Synopsis</div>
            {movie && movie.overview}
          </div>
          <div className="text-white flex flex-wrap w-full gap-y-2">
            {movieCrew &&
              movieCrew.map((el, i) => (
                <div key={i} className="w-1/2 whitespace-nowrap">
                  <div className="font-bold">{el.job}</div>
                  <div>{el.name}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-xl text-white ml-5">Bandes annonces</div>
        {movieVideos && <MoviesSlider video={true} movies={movieVideos} slidesPerView={[1,2]} />}
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-xl text-white ml-5 items-center">Casting</div>
        <div className="flex flex-wrap justify-around gap-1 md:gap-6 gap-y-8 md:md:gap-y-10">
          {movieCast &&
            movieCast.map((el, i) =>
              i < 10 || showAllCasts ? <CastCard key={i} cast={el} /> : null
            )}
        </div>
        <div
          className="flex flex-col gap-1 items-center text-white cursor-pointer"
          onClick={() => {
            setShowAllCasts(!showAllCasts);
          }}
        >
          <div>{!showAllCasts ? 'Voir tout' : 'Masquer'}</div>
          {!showAllCasts ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
        </div>
      </div>
    </div>
  );
};

export default Details;
