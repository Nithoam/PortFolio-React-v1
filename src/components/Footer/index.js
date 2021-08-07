import React from 'react';
import {FaLinkedin, FaMailBulk, FaGithub} from 'react-icons/fa'
import './footer.scss';


const Footer = () => (
  <>
    <hr className="footer-separation"/>
    <footer className="footer">
      <div className="logos">
        <a href="https://www.linkedin.com/in/nicolas-garilliere/" target="_blank" rel="noreferrer" className="logo"><FaLinkedin/></a>
        <a href="mailto:nicolas.nithoam@gmail.com" target="_blank" rel="noreferrer" className="logo"><FaMailBulk/></a>
        <a href="https://github.com/Nithoam" target="_blank" rel="noreferrer" className="logo"><FaGithub/></a>
      </div>
    </footer>
  </>
);

export default Footer;
