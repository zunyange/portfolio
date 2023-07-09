import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main.js';
import Detail from './pages/Detail.js';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
