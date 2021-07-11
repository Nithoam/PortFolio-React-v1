import React from 'react';

import './skills.scss';

const Skills = () => (
  <div className="skills main-component">
    
    <div className="skills-pro">
      <h3 className="skills-title">Hard skills</h3>
      <div className="skills-pro-front">
        <h4 className="skills-subtitle">Front-end</h4>
        <ul>
          <li>React</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS/SASS</li>
        </ul>
      </div>
      
      <div className="skills-pro-back">
        <h4 className="skills-subtitle">Back-end</h4>
        <ul>
          <li>PHP</li>
          <li>SQL</li>
        </ul>
      </div>
    </div>
    
    <div className="skills-perso">
      <h3 className="skills-title">Soft Skills</h3>
      <ul>
        <li>Capacité d’adaptation et apprentissage rapide</li>
        <li>Capacité d’analyse et de remise en question</li>
        <li>Communications verticales et horizontales</li>
      </ul>
    </div>
   
    <div className="skills-language">
      <h3 className="skills-title">Langues</h3>
      <ul>
        <li> Français - Langue maternelle </li>
        <li> Anglais  - Compréhension professionnelle</li>
      </ul>
    </div>
    
  </div>
);

export default Skills;
