import React from "react";
import "./about.css";
import me from '../../assets/me.png'

const About = () => {
  return (
    <section id="about">
      <h5> Get to know me</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me"></div>
            <div className="about_me-image">
                <img src={me} alt="" />
            </div>
      </div>
      <div className="about_container">

      </div>
    </section>
  );
};

export default About;
