import React from 'react';
import './ContactPage.css';
import MelCon from './mel-con.gif';

import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";


const ContactPage = () => {
  return (
    <>
    <div className='container-fluid contact-container'>
        <h2 className="contact-nice fw-bold">
            Nice meeting you!
        </h2>
        <h4 className='fs-5 fs-sm-9 fs-md-9'>Get on my socials...</h4>
        <div className="icons">
            <a target="_blank" href="https://github.com/rimuelcanada14/" ><IoLogoGithub className="github"/></a>
            <a target="_blank" href="https://www.linkedin.com/in/rimuel-canada-369232274/" ><FaLinkedinIn className="linkedin"/></a>
            <a target="_blank" href="https://www.facebook.com/rimuel.canada.33/" ><FaFacebookSquare className="facebook"/></a>
            <a target="_blank" href="https://www.instagram.com/melmelelel_?igsh=MXB0cW1ka25jcHkzMQ==" className='ig'><SiInstagram /></a>
        </div>
        <img src={MelCon} className='contact-image'></img>
    </div>
    
    </>
    
  )
}

export default ContactPage