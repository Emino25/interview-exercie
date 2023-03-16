import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { createContext, useState } from 'react';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Details from './pages/Details';
import Result from './pages/Result';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="result/:searchInput" element={<Result />} />
          <Route path="details/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
