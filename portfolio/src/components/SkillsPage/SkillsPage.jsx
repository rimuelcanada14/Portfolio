import React, { useState } from 'react';
import './SkillsPage.css';
import { RxQuestionMarkCircled } from "react-icons/rx";

const SkillsPage = () => {
  const [flipped, setFlipped] = useState([false, false, false]);

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <div className='container skills-container'>
      <p className="fw-bold skills-titles">I can do...</p>
      <div className="skills-card">
        <div className={`flip-card-s ${flipped[0] ? 'flipped' : ''}`} onClick={() => handleFlip(0)}>
          <div className="flip-front-s">
            <RxQuestionMarkCircled className="card-icon" />
            <p className="text-end fw-bold skills-title">
              Front-end<br />Trial
            </p>
          </div>
          <div className="flip-back">
            <p>This is my front-end</p>
          </div>
        </div>

        <div className={`flip-card ${flipped[1] ? 'flipped' : ''}`} onClick={() => handleFlip(1)}>
          <div className="flip-front">
            <RxQuestionMarkCircled className="card-icon" />
            <p className="text-end fw-bold skills-title">
              Back-end<br />development
            </p>
          </div>
          <div className="flip-back">
            <p>This is my back-end</p>
          </div>
        </div>

        <div className={`flip-card ${flipped[2] ? 'flipped' : ''}`} onClick={() => handleFlip(2)}>
          <div className="flip-front">
            <RxQuestionMarkCircled className="card-icon" />
            <p className="text-end fw-bold skills-title">
              Database and <br /> Other Tools
            </p>
          </div>
          <div className="flip-back">
            <p>This is my database and tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
