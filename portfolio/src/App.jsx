import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./components/MainPage/MainPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App