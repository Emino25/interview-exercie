import React, { useContext, useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { redirect, useNavigate } from 'react-router-dom';
import SuggestionMovieCard from './SuggestionMovieCard';


const SearchBar = (e) => {
  const [suggestionsOverlay, setSuggestionsOverlay] = useState(false);
  const [suggestionsMovies, setSuggestionsMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const searchBar = useRef();


  const FocusHandler = () => {
    searchBar.current.style.backgroundColor = 'rgba(255,255,255)'
    searchBar.current.style.color = '#000'
    if (parseInt(window.innerWidth) < 600) {
      document.querySelector('.logo').style.display = 'none';
    }
    setSuggestionsOverlay(true);
    searchBar.current.style.borderRadius = '6px 6px 0 0';
  };
  const OutOfFocusHandler = (e) => {
    if (parseInt(window.innerWidth) < 600) {
      document.querySelector('.logo').style.display = 'inline-block';
    }
    setSuggestionsOverlay(false); 
    searchBar.current.style.backgroundColor = 'rgba(255,255,255,0.2)'
    searchBar.current.style.color = '#fff'
    searchBar.current.style.borderRadius = '6px';
  };

  window.addEventListener('click',(e)=>{
    if(e.target.closest('.searchBox') || e.target.closest('.suggestionsOverlay') || !suggestionsOverlay) return
    OutOfFocusHandler()
  })

  const searchSubmitHandler = (e) => {
    e.preventDefault()
    OutOfFocusHandler() 
    navigate(`result/${searchInput}`)
  }

  const fetchSearchSuggestions = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=41bd9a01963c8bd035dfc919502661a9&query=${searchInput}`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setSuggestionsMovies(results.slice(0, 10));
      });
  };

  useEffect(() => {
    let timeOut;
    timeOut = setTimeout(() => {
      fetchSearchSuggestions();
    }, 300);

    return () => {
      clearTimeout(timeOut);
    };
  }, [searchInput]);

  return (
    <div className="relative searchBox">
      <div
        ref={searchBar}
        className="w-full h-max flex items-center p-3 gap-2 rounded-md text-white bg-white bg-opacity-20"
      >
        <AiOutlineSearch className="h-full cursor-pointer aspect-square" onClick={searchSubmitHandler}/>
        <form onSubmit={searchSubmitHandler} className="w-full">
        <input
          onFocus={FocusHandler}
          className="w-full h-full bg-transparent overflow-hidden placeholder-white focus:outline-none focus:text-black  focus:placeholder-black active:outline-none search-input"
          type="text"
          placeholder="Recherche un film, un réalisateur, un acteur"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          value={searchInput}
          />
        </form>
      </div>
      {suggestionsOverlay && (
        <div className="suggestionsOverlay absolute z-40 min-h-[40px] p-3 flex flex-col gap-2 w-full rounded-b-md bg-white " >
          {suggestionsMovies.map((movie, i) => {
            return <SuggestionMovieCard key={i} movie={movie} OutOfFocusHandler={OutOfFocusHandler}  />;
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
