import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import MoviesSlider from '../components/MoviesSlider';

const Home = () => {
  const [movies, setMovies] = useState({ trending: [], top: [], latest: [] });

  const backgroundHandler = ({ poster_path }) => {
    document.querySelector(
      '.background'
    ).style.backgroundImage = `linear-gradient(to bottom, transparent 0% ,transparent 60%,#2b2b2b 100%),url('https://image.tmdb.org/t/p/original${poster_path}')`;
  };

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=41bd9a01963c8bd035dfc919502661a9'
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setMovies((prevState) => {
          return { ...prevState, trending: results };
        });
      })
      .catch((err) => console.log(err));
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=41bd9a01963c8bd035dfc919502661a9&language=en-US&page=1'
    )
      .then((res) => res.json())
      .then(({ results }) => {
        backgroundHandler(results[0]);
        setMovies((prevState) => {
          return { ...prevState, latest: results };
        });
      })
      .catch((err) => console.log(err));
    fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=41bd9a01963c8bd035dfc919502661a9&language=en-US&page=1'
    )
      .then((res) => res.json())
      .then(({ results }) =>
        setMovies((prevState) => {
          return { ...prevState, top: results };
        })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full flex flex-col my-10 gap-14">
      <Hero movies={movies.latest} />
      <div className="flex flex-col gap-4">
        <div className="text-xl text-white pl-3">À l’affiche cette semaine</div>
        <MoviesSlider
          movies={movies.trending}
          card={true}
          slidesPerView={[2.5,6.5,9.5]}
        />
      </div>
      <div className="flex flex-col gap-4 mb-5">
        <div className="text-xl text-white pl-3">Les films les mieux notés</div>
        <MoviesSlider
          movies={movies.top}
          rate={true}
          card={true}
          slidesPerView={[2.5,6.5,9.5]}
        />
      </div>
    </div>
  );
};

export default Home;
