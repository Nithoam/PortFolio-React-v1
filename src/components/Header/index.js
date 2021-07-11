import React from 'react';
import { FaSnowflake, FaHome, FaSun, FaMoon } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import './header.scss';

const Header = ({snow , snowing, sun, sunning}) => {
  const handleChangeSnow = () => {
    snowing();
  }
  
  const handleChangeSun = () => {
    sunning();
  }
  
  const snowButton = snow ? "button button-pushed" : "button";
  const sunButton = sun ? "button sun-pushed" : "button";

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
        <h1 className='name'> <span className="monoton-letters">N</span>icolas <span className="monoton-letters">G</span>arilliere</h1>
        <div className={logo}>
          <div className="logo__circle">
            <span className="monoton-letters">N</span>
          </div>
        </div>
        <h2 className="job">Developpeur Web</h2>
      </header>
      <hr className="header-separation"/>
    </>
  );
};
export default Header;