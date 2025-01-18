import React from 'react'
import './AboutPage.css'
import melImage from './mel.gif';
import pdfResume from './resume.pdf'

const AboutPage = () => {
  return (
    <div className="container about-container">
      <div className="about-content">
        <div className="about-title">
            <p>About Me</p>
        </div>
        <div className="col-lg-8">
            <p>I am an aspiring full-stack developer, currently pursuing a Bachelor of Science in Information Technology at Pamantasan ng Lungsod ng Maynila and is currently looking for an internship related to my field. I have developed progressive web applications using the ReactJS framework, integrating cutting-edge technologies to enhance user experiences. I thrive in collaborative environments and am committed to delivering innovative solutions that align with organizational goals.</p>
        </div>
        <a className="btn border-white resume-btn" href = {pdfResume} target='_blank'>
          View Resume
        </a>
      </div>
      <div className="about-img">
        <img src={melImage} alt="About Image" className='about-me'></img>
      </div>
      
    </div>
  )
}

export default AboutPage