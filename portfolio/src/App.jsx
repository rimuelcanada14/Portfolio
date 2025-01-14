import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TitlePage from "./pages/TitlePage/TitlePage";
import MainPage from "./pages/MainPage/MainPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<TitlePage />} />
        <Route path = "/main" element = {<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App