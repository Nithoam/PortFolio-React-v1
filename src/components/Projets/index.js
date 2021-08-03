import React from 'react';

import './projets.scss';
import maestralogo from '../App/maestra-logo.png'
const Carousel = require( '3d-react-carousal').Carousel;
const Projets = () => {
  let slides = [
    <div className="projet">
      <img src={maestralogo} alt="" className="projet-logo"></img> 
      <h3 className="projet-title">Maestra</h3> 
      <figure className="projet-figure">
        <img src="" alt="" className="projet-figure-picture"></img>
      </figure> 
      {/* <p className="projet-description">
        Maestra est une site d'information, sur les pilules contraceptives, réalisé en trois sprints d'une semaine chacun, par un groupe de cinq élèves d'Oclock
      </p>  */}
      <p className="projet-description"> Retrouvez la présentation du projet Vendredi 6 Août, en direct, sur Youtube !</p>
      <a className="projet-lien"  target="__blank" href="https://www.youtube.com/watch?v=kuLnRV0llGc" noreferrer> Lien vers la présentation </a>
    </div>
    ,
    <div className="projet">
      <img src={maestralogo} alt="" className="projet-logo"></img> 
      <h3 className="projet-title">Maestra</h3> 
      <figure className="projet-figure">
        <img src="" alt="" className="projet-figure-picture"></img>
      </figure> 
      <p className="projet-description"> Retrouvez la présentation du projet Vendredi 6 Août, en direct, sur Youtube !</p>
      <a className="projet-lien"  target="__blank" href="https://www.youtube.com/watch?v=kuLnRV0llGc" noreferrer> Lien vers la présentation </a>
    </div>
  ]
  return (
    <div className="projets">
      <Carousel slides={slides} autoplay={false} interval={1000}/>
    </div>
  );
}

export default Projets;
