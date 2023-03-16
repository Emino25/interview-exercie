import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../Common';
import Logo from './Logo';

const Header = () => {
  return (
    <div className="flex justify-between w-full px-3 mt-5 gap-2 items-center h-max">
      <div className="logo">
        <Link to={'/'}>
          <Logo />
        </Link>
      </div>
      <div className="w-full md:max-w-sm">
          <SearchBar />
      </div>
    </div>
  );
};

export default Header;
