import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';


import MovieCard from './MovieCard';
import MovieVideo from './MovieVideo';
import { useRef, useState } from 'react';



const MoviesSlider = ({ movies, rate, card, video, slidesPerView }) => {
  const [reachEnd,setReachEnd]=useState(false)
  const [reachBegin,setReachBegin]=useState(true)
  const swiper = useRef()
  return (
    <div className="w-full h-max slider relative ">
      <div className={`bg-[#101010] text-4xl cursor-pointer hidden text-white absolute translate-x-[-100%] top-1/4 px-3 py-1 rounded-3xl  md:inline-block ${reachBegin ? 'opacity-30' : ''}`}
      onClick={()=>swiper?.current.swiper.slidePrev()}
      >
      <BsArrowLeft />
      </div>
      <Swiper
        modules={[Pagination,Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={slidesPerView[0]}
        style={{ height: '100%', with: '100vw' }}
        watchSlidesProgress
        onSlideChange={(swiper)=>{
          swiper.isEnd ? setReachEnd(true) : setReachEnd(false)
          swiper.isBeginning ? setReachBegin(true) : setReachBegin(false)
        }}
        ref={swiper}
        breakpoints={{
          640: {
            slidesPerView: slidesPerView[0],
          },
          768: {
            slidesPerView: slidesPerView[1],
          },
          1420:{
            slidesPerView: slidesPerView[2]
          }
        }}
      >
        {movies.map((movie, i) => {
          return (
            <SwiperSlide key={i}>
              {(card && <MovieCard movie={movie} rate={rate}/>) ||
                (video && <MovieVideo movie={movie} />)}
            </SwiperSlide>
          );
        })}
      </Swiper>
        {/* <div className='absolute z-30 right-0 top-0 h-full w-1/12' style={{background:'linear-gradient(to left, #2b2b2b 0%,#2b2b2bc2 100%)'}} ></div> */}
      <div className={`bg-[#101010] text-4xl cursor-pointer hidden text-white absolute translate-x-[115%] right-0 top-1/4 px-3 py-1 rounded-3xl md:inline-block ${reachEnd ? 'opacity-30':'opacity-100'}`}
      onClick={()=>swiper?.current.swiper.slideNext()}
      >
      <BsArrowRight />
      </div>
    </div>
  );
};

export default MoviesSlider;
