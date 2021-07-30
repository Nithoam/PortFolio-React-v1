import React from 'react';
import './experiences.scss';
import logoMM from './logoMM.png';
import logoKFC from './logoKFC.png';
import logoECenter from './logoEcenter.png';

const Carousel = require( '3d-react-carousal').Carousel;

const Experiences = () => {
  let slides = [
    <div className="experience">
      <div className="experience-time">[Juillet 2021]</div>
      <h3 className="experience-title">Maestra</h3>
      <p className="experience-subtitle">Projet de groupe de fin de formation : Création d'un site sur les pilules contraceptives</p>
      <ul className="experience-list">
        <li>- Developpement front du site, en React.js </li>
        <li>- Rôle de scrum master</li>
        <li>- Tenu du journal de bord du groupe</li>
        <li>- Présentation orale, sur Youtube, du projet</li>
      </ul>
    </div>
    ,
    <div className="experience">
      <img className="experience-logo" src={logoMM} alt="logo Micromania" />
      <div className="experience-time">[2019-2020]</div>
      <h3 className="experience-title">Vendeur Adjoint Micromania </h3>
      <p className="experience-subtitle">Accompagnement de mes supérieurs hiérarchiques, dans la gestion du magasin Micromania Beaugrenelle (top 20 national)</p>
      <ul className="experience-list">
        <li>- Réceptions des livraisons</li>
        <li>- Gestions des stocks</li>
        <li>- Merchandising</li>
        <li>- Recrutements</li>
      </ul>
    </div>
    ,
    <div className="experience">
      <img className="experience-logo" src={logoMM} alt="logo Micromania" />
      <div className="experience-time">[2016-2019]</div>
      <h3 className="experience-title">Vendeur/Préparateur Micromania </h3>
      <p className="experience-subtitle">Magasin Micromania Défense 2 (magasin top 3 national)</p>
      <ul className="experience-list">
        <li>- Prise en charge de la clientèle</li>
        <li>- Surveillance de la surface de vente</li>
        <li>- Gestions des stocks</li>
      </ul>
    </div> 
    ,
    <div className="experience">
      <img className="experience-logo" src={logoKFC} alt="logo KFC" />
      <div className="experience-time">[2015-2016]</div>
      <h3 className="experience-title">Employé polyvalent KFC</h3>
      <p className="experience-subtitle">Cuisinier KFC (Paris XIV)</p>
      <p className="experience-description">Production des différentes commandes lié à l'activité du restaurant</p>
    </div> 
    , 
    <div className="experience">
      <img className="experience-logo" src={logoECenter} alt="logo E-Center" />
      <div className="experience-time">[juil.2015 &#38; juil.2016]</div>
      <h3 className="experience-title">Façonneur</h3>
      <p className="experience-subtitle">E-center Malakoff  Remplacement saisonnier</p>
      <ul className="experience-description">
        <li>- Réalisation de livres photos</li>
        <li>- Mise en cartons des commandes professionnelles</li>
        <li>- Expédition des commandes personnelles</li>
      </ul>
    </div>
    ,
  ];
  return (
    <div className="experiences">
      <Carousel slides={slides} autoplay={false} interval={1000}/>
    </div>
  );
}

export default Experiences;