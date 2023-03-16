import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = () => {
  return (
    <div className="layout w-full relative h-max flex flex-col mx-auto bg-[#2b2b2b] ">
      <div
        className="background absolute bg-no-repeat w-full h-1/3 blur-2xl"
        style={{ backgroundSize: '100% 100%' }}
      ></div>
      <div className="z-10 md:w-3/4 md:mx-auto">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
