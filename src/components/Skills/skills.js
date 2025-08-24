import React from 'react';
import './skills.css';
import Html from './image/html.jpeg';
import Css from './image/css.png';
import Javascript from './image/javascript.png';
import Python from './image/python.png';
import Cc from './image/c.jpg';
import Javaa from './image/java.png';
import ReactJs from './image/react.png';
import Bootstrap from './image/bootstrap.png';
import NodeJs from './image/node.png';
import MySQL from './image/mysql.png';
import MongoDB from './image/mongodb.png';
import Git from './image/git.png';

const skillImages = [
  Html, Css, Bootstrap, Javascript, ReactJs, NodeJs, MongoDB, MySQL,
  Python, Cc, Javaa, Git
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skillImages.map((image, index) => (
          <div className="skill" key={index}>
            <img src={image} alt="Skill" className="skill-img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
