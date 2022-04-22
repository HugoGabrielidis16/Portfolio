import React from "react";
import "./about.css";
import me from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {GiDiploma} from 'react-icons/gi'

const About = () => {
  return (
    <section id="about">
      <h5> Get to know me</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
            <div className="about_me-image">
                <img src={me} alt="About Image" />
        </div>
      </div>

      <div className="about_content">
        <div className="about_cards"> 
            <article className ="about_card"> 
            <FaAward className="about_icons"/>
              <h5>Experience </h5>
              <small> 
              2 internship in the Data science domain</small>
            </article>
            <article className = "about_card"> 
            <VscFolderLibrary className="about_icons"/>
              <h5>Projects </h5>
              <small> 
              A lot of projects</small>
            </article>
            <article className = "about_card"> 
            <GiDiploma className="about_icons"/>
              <h5> Diploma </h5>
              
              <small>Master of Computer Science from the University of Cincinnati</small>
              <small>Master of Computer Engineering from ENSEM</small>
              
            </article>

         </div>
        <p>
          <small>Hello my name is Hugo GABRIELIDIS, I just graduate from the University of Cincinnati and I'am looking 
          for opportunity as a Data Scientist or Machine Learning Engineer</small>
        </p>
        <a href='#contact' className='btn btn-primary'> Let's Talk</a>
      </div>
      </div>
    </section>
  );
};

export default About;
