import React from 'react';

import './formations.scss';

const Formations = () => (
  <div className="formations main-component">
    <div className="formation">
      <h2 className="formations-title">2021 - Formation Développeur web</h2>
      <h3 className="formations-subtitle">O’clock, Labellisée Grand Ecole du Numérique</h3>
      <div className="formations-description">
        <p>- 3 mois de Socle : HTML/CSS/Javascript/PHP/MySQL</p>
        <p>- 1 mois de Spécialisation : React.js</p>
        <p>- 1 mois de projet</p>
      </div>
    </div>

    <div className="formation">
      <h2 className="formations-title">2014 - BACCALAUREAT Scientifique</h2>
      <h3 className="formations-subtitle"> Lycée Sainte Géneviève – Paris VI </h3>
      <div className="formations-description">
        <p>Spécialité Science et Vie de la Terre</p>
      </div>
    </div>
  </div>
);

export default Formations;
