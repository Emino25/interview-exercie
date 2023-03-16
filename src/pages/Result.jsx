import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CastCard, Spinner } from '../components/Common';

const Result = () => {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const { searchInput } = useParams();


  useEffect(() => {
    document.querySelector('.background').style.backgroundImage = `none`;
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=41bd9a01963c8bd035dfc919502661a9&query=${searchInput}`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setSearchResult(results);
        setLoading(false);
      });
    return () => {
      document.querySelector('.search-input').value = '';
    };
  }, []);

  return (
    <div className="min-h-screen my-10 mx-5 bg-[#2B2B2B]">
      {loading && (
        <div className="h-12 flex justify-center">
          <Spinner color="white" />
        </div>
      )}
      <div className='flex flex-col gap-8'>
        <div className='text-white text-2xl md:text-4xl'>
          <div className='font-bold'>{searchInput}</div>
          <div >{searchResult.length}</div>
        </div>
        <div className="flex flex-wrap gap-7 justify-between relative">
          {searchResult &&
            searchResult.map((result, i) => {
              return <CastCard key={i} movie={result} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Result;
