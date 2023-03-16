import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MovieCard from './MovieCard';
import { useRef } from 'react';

const MoviesSlider = ({ movies, activeSlideFn ,activeSlide}) => {
  const swiper = useRef()
  const backgroundHandler = (index) => {
    document.querySelector(
      '.background'
    ).style.backgroundImage = `linear-gradient(to bottom, transparent 0% , transparent 60% , #2B2B2B 100%),url('https://image.tmdb.org/t/p/original${movies[index].poster_path}')`;
  };

  return (
    <Swiper
      ref={swiper}
      modules={[Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={(e) => {
        activeSlideFn(e.activeIndex);
        backgroundHandler(e.activeIndex);
      }}
      onSwiper={swiper=>swiper.slideTo(activeSlide)}
      style={{ height: '90%',width:'100%' , }}
    >
      {movies.map((movie, i) => {
        return (
          <SwiperSlide key={i}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MoviesSlider;
