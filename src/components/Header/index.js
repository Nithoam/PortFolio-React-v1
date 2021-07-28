import React from 'react';
import { FaSnowflake, FaHome, FaSun, FaMoon } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import './header.scss';

const Header = ({snow , snowing, sun, sunning}) => {
  /*
    button snow : activate/desactivate
  */ 
  const handleChangeSnow = () => {
    snowing();
  }
  
  /*
   button dark/light mode
  */
  const handleChangeSun = () => {
    sunning();
  }
  
  // Pressed buttons effect
  const snowButton = snow ? "button button-pushed" : "button";
  const sunButton = sun ? "button sun-pushed" : "button";

  // Change moon and sun
  const logo = sun ? " header__logo header__logo-sun " : " header__logo header__logo-moon"
  
  return(
    <>
      <div className="buttons">
        <NavLink to="/"><button className="button"> <FaHome /></button></NavLink>
        <button onClick={handleChangeSnow} className={snowButton}> <FaSnowflake /></button> 
        {
         !sun && <button onClick={handleChangeSun} className={sunButton}> <FaSun /></button> 
        }
        {
          sun && <button onClick={handleChangeSun} className={sunButton}> <FaMoon/></button>
        }
      </div>
      <header className="header">
        <h1 className='name'> <span className="monoton-letters">N</span>icolas Garilliere</h1>
        <div className={logo}>
          <div className="logo__circle">
            <span className="monoton-letters">N</span>
          </div>
        </div>
        <h2 className="job">Développeur React</h2>
      </header>
      <hr className="header-separation"/>
    </>
  );
};
export default Header;