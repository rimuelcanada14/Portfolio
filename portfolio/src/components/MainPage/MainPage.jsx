import React from 'react';

import TitlePage from '../TitlePage/TitlePage'
import AboutPage from '../AboutPage/AboutPage'
import Navbar from '../Navbar/Navbar'

const MainPage = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>
    
    <div>
      <TitlePage id="title"/>
    </div>

    <div>
      <AboutPage id="about"/>
    </div>
    </>
    
  )
}

export default MainPage