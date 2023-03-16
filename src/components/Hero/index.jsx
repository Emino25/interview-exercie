import React, { useRef, useState } from 'react';
import MoviesSlider from './MoviesSlider';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MovieCard from './MovieCard';

const Hero = ({ movies }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const latestMoviesSlice = movies.slice(0, 4);
  const background = document.querySelector('.background');

  const swiper = useRef();
  {
    background && latestMoviesSlice[activeSlide]
      ? (background.style.backgroundImage = `linear-gradient(to bottom, transparent 0% , transparent 60% , #2B2B2B 100%),url('https://image.tmdb.org/t/p/original${latestMoviesSlice[activeSlide].poster_path}')`)
      : null;
  }

  return (
    <div className="h-64 flex flex-col justify-center  rounded-md overflow-hidden md:w-full md:h-80 md:aspect-video md:flex-row">
      <Swiper
        ref={swiper}
        modules={[Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(e) => {
          setActiveSlide(e.activeIndex);
        }}
        onSwiper={(swiper) => {
          swiper.slideTo(activeSlide);
        }}
        style={{ height: '90%', width: '100%' }}
      >
        {latestMoviesSlice.map((movie, i) => {
          return (
            <SwiperSlide key={i}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex h-max gap-3 justify-center p-3 md:flex-col md:h-full">
        {latestMoviesSlice.map((_, i) => {
          if (activeSlide === i) {
            return (
              <div
                key={i}
                className="bg-white cursor-pointer rounded-full h-2 w-7 md:h-7 md:w-2"
              ></div>
            );
          }
          return (
            <div
              key={i}
              className="bg-white cursor-pointer rounded-full h-2 w-2"
              onClick={() => {
                swiper.current.swiper.slideTo(i);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
