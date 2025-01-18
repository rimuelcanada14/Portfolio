import React from 'react';
import { ReactTyped } from "react-typed";
import './TitlePage.css';

const TitlePage = () => {
  return (
    <div className="container-fluid title-container">
      <div className="text-center">
        <p className="text-white">
          I am
          <ReactTyped strings={["a web developer", "leading front-end developments", "a 3D modeler", "still learning", ""]} typeSpeed={40} backSpeed={30} loop className='title-type'/>
        </p>
        <div className="border-top border-bottom py-3">
          <h1 className="text-white fw-bold fs-1 title-text">
            RIMUEL CAÑADA
          </h1>
        </div>
        <a className="btn border-white title-btn" href="#about">
          Know me!
        </a>
      </div>
    </div>
  );
};

export default TitlePage;
