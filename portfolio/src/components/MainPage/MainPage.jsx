import React from 'react';

import TitlePage from '../TitlePage/TitlePage'
import AboutPage from '../AboutPage/AboutPage'
import SkillsPage from '../SkillsPage/SkillsPage'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
import Navbar from '../Navbar/Navbar'

const MainPage = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>
    
    <div id="title">
      <TitlePage />
    </div>

    <div id="about">
      <AboutPage />
    </div>

    <div id="skills">
      <SkillsPage />
    </div>

    <div id="projects">
      <ProjectsPage />
    </div>
    </>
    
  )
}

export default MainPage