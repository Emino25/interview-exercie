import React from 'react';

const Pagination = ({ movies, activeSlide,activeSlideFn }) => {
  return (
    <div className="flex h-max gap-3 justify-center p-3 md:flex-col md:h-full"> 
      {movies.map((_, i) => {
        if (activeSlide === i) {
          return <div key={i} className="bg-white cursor-pointer rounded-full h-2 w-7 md:h-7 md:w-2" onClick={()=>{activeSlideFn(i)}}></div>;
        }
        return <div key={i} className="bg-white cursor-pointer rounded-full h-2 w-2" onClick={()=>{activeSlideFn(i)}}></div>;
      })}
    </div>
  );
};

export default Pagination;
