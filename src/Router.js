import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main.js';
import ProjectOne from './pages/ProjectDetail/ProjectOne.js';
import ProjectTwo from './pages/ProjectDetail/ProjectTwo.js';
import ProjectThree from './pages/ProjectDetail/ProjectThree.js';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project/200ok" element={<ProjectOne />} />
        <Route path="/project/maehwa" element={<ProjectTwo />} />
        <Route path="/project/dabisu" element={<ProjectThree />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
