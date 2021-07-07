import React from 'react';
import { FaSnowflake, FaHome, FaSun } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import './header.scss';

const Header = ({snow , snowing, sun, sunning}) => {
  const handleChangeSnow = () => {
    snowing();
  }
  /*
  const handleChangeSun = () => {
    sunning();
  }
  */
  const snowButton = snow ? "button button-pushed" : "button";
  // const sunButton = sun ? "button button-pushed" : "button";
  return(
    <>
      <div className="buttons">
        <NavLink to="/"><button className="button"> <FaHome /></button></NavLink>
        <button onClick={handleChangeSnow} className={snowButton}> <FaSnowflake /></button> 
        <button  /* onClick={handleChangeSun} */ className="button"> <FaSun /></button> 
      </div>
      <header className="header">
        <h1 className='name'> <span className="monoton-letters">N</span>icolas <span className="monoton-letters">G</span>arilliere</h1>
        <div className="header__logo">
          <div className="logo__circle">
            <span className="monoton-letters">N</span>
          </div>
        </div>
        <h2 className="job">Developpeur Web</h2>
      </header>
      <hr/>
    </>
  );
};
export default Header;
