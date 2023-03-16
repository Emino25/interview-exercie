import React from 'react';

const Spinner = ({ color }) => {
  return (
    <div
      className={`h-full aspect-square rounded-full animate-spin
    border-2 border-solid border-[rgba(255,255,255,0.2)] border-t-[white]`}
    ></div>
  );
};

export default Spinner;
