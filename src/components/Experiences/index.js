import React from 'react';

import '../App/styles/index.scss'
import './experiences.scss';

const Experiences = () => (
  <div className="experiences main-component">
    <div className="experience">
      <h3 className="experience-title">[2019-2020] - Vendeur Adjoint Micromania</h3>
      <p className="experience-subtitle">Accompagnement de mes supérieurs hiérarchiques, dans la gestion du magasin Micromania Beaugrenelle (top 20 national)</p>
      <ul className="experience-list">
        <li>- Réceptions des livraisons</li>
        <li>- Gestions des stocks</li>
        <li>- Merchandising</li>
        <li>- Recrutements</li>
      </ul>
    </div>

    <div className="experience">
      <h3 className="experience-title">[2016-2019] - Vendeur/Préparateur Micromania</h3>
      <p className="experience-subtitle">Magasin Micromania Défense 2 (magasin top 3 national)</p>
      <ul className="experience-list">
        <li>- Prise en charge de la clientèle</li>
        <li>- Surveillance de la surface de vente</li>
        <li>- Gestions des stocks</li>
      </ul>
    </div>

    <div className="experience">
      <h3 className="experience-title">[2015-2016] - Employé polyvalent KFC</h3>
      <p className="experience-subtitle">Cuisinier au KFC de Paris Alésia (Paris XIV)</p>
      <ul className="experience-list">
        <li>Production des différentes commandes lié à l'activité du restaurant</li>
      </ul>
    </div>

    <div className="experience">
      <h3 className="experience-title">[juil.2015 &#38; juil.2016] - Façonneur</h3>
      <p className="experience-subtitle">E-center Malakoff - Remplacement saisonnier</p>
      <ul className="experience-description">
        <li>- Réalisation de livres photos</li>
        <li>- Mise en cartons des commandes professionnelles</li>
        <li>- Expédition des commandes personnelles</li>
      </ul>
    </div>

  </div>
);

export default Experiences;
