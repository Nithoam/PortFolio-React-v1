import React from 'react';
import {FaGithub} from 'react-icons/fa'

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
      <p className="projet-description">
        Maestra est une site d'information, sur les pilules contraceptives, réalisé en quatre sprints d'une semaine chacun, par un groupe de cinq élèves d'Oclock.
      </p> 

      <ul className="projet-list">
        <li className="projet-li">Lors de ce projet :</li>
        <li>- J'ai tenu le rôle de Scrum Master</li>
        <li>- J'ai développé la partie front, en React et redux, avec deux autres étudiants</li>
        <li>- J'ai présenté le projet, en direct, sur Youtube, avec le Product Owner</li>
      </ul> 
      <a className="projet-lien"  target="__blank" href="https://www.youtube.com/watch?v=2jhWvM-egUA" noreferrer="true" > Lien vers la présentation, sur Youtube</a>
      <a href="https://github.com/Nithoam/Maestra-front" target="__blank" className="projet-github" noreferrer="true" ><FaGithub/> Retrouver le code du projet, sur Github</a>
    </div>
    ,
    <div className="projet">
      <img src={maestralogo} alt="" className="projet-logo"></img> 
      <h3 className="projet-title">Maestra</h3> 
      <figure className="projet-figure">
        <img src="" alt="" className="projet-figure-picture"></img>
      </figure> 
      <p className="projet-description">
        Maestra est une site d'information, sur les pilules contraceptives, réalisé en quatre sprints d'une semaine chacun, par un groupe de cinq élèves d'Oclock.
      </p> 

      <ul className="projet-list">
        <li className="projet-li">Lors de ce projet :</li>
        <li>- J'ai tenu le rôle de Scrum Master</li>
        <li>- J'ai développé la partie front, en React et redux, avec deux autres étudiants</li>
        <li>- J'ai présenté le projet, en direct, sur Youtube, avec le Product Owner</li>
      </ul> 
      <a className="projet-lien"  target="__blank" href="https://www.youtube.com/watch?v=2jhWvM-egUA" noreferrer="true" > Lien vers la présentation, sur Youtube</a>
      <a href="https://github.com/Nithoam/Maestra-front" target="__blank" className="projet-github" noreferrer="true" ><FaGithub/> Retrouver le code du projet, sur Github</a>
    </div>
  ]
  return (
    <div className="projets">
      <Carousel slides={slides} autoplay={false} interval={1000}/>
    </div>
  );
}

export default Projets;
