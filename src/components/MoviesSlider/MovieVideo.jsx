import React from 'react';

const MovieVideo = ({ movie }) => {
  return (
    <iframe
      style={{ width: '100%', aspectRatio: '16/9', marginLeft: '-10px' }}
      src={`https://www.youtube.com/embed/${movie.key}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default MovieVideo;
