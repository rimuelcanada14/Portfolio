import React, {useState} from 'react'
import './SkillsPage.css'
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
        <p className="skills-title">I can do...</p>
        <div className="skills-card">
            <div className="flip-card">
                <p className = "text-end fs-4 fw-bold skills-title">
                    Front-end<br/>development
                </p>
                <RxQuestionMarkCircled className="card-icon"/>
            </div>
            <div className="flip-card">
                <p className = "text-end fs-4 fw-bold skills-title">
                    Backend<br/>development
                </p>
                <RxQuestionMarkCircled className="card-icon"/>
            </div>
            <div className="flip-card">
                <p className = "text-end fs-4 fw-bold skills-title">
                    Database <br/> and Other Tools
                </p>
                <RxQuestionMarkCircled className="card-icon"/>
            </div>
        </div>
    </div>
  )
}

export default SkillsPage