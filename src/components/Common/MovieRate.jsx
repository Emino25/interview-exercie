import React from 'react';

const MovieRate = ({ rate }) => {
  const rateInPercentage = Math.trunc(rate * 10);
  return (
    <div className="flex h-max w-full items-center gap-3">
      <div className="h-2 w-full bg-black rounded-lg">
        <div
          className={`h-full bg-[#33BD52] rounded-lg`}
          style={{ width: `${rateInPercentage}%` }}
        ></div>
      </div>
      <div className="text-lg text-[#9B9B9B] ">{rateInPercentage}%</div>
    </div>
  );
};

export default MovieRate;
