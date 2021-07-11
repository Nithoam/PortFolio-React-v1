import React from 'react';
import { NavLink } from 'react-router-dom'
import './nav.scss'

const Nav = () => {

  return(
    <nav className="nav">
      <NavLink className="nav__link" activeClassName="nav__link--selected" to="/formations">Formations</NavLink>
      <NavLink className="nav__link" activeClassName="nav__link--selected" to="/experiences">Expériences</NavLink>
      <NavLink className="nav__link" activeClassName="nav__link--selected" to="/competences">Compétences</NavLink>
      <NavLink className="nav__link" activeClassName="nav__link--selected" to="/projets">Projets</NavLink>
    </nav>
  );
  }
export default Nav;
