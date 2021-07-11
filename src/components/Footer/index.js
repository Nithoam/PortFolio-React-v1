import React from 'react';
import {FaLinkedin, FaMailBulk, FaGithub, FaInfoCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './footer.scss';


const Footer = () => (
  <>
    <hr className="footer-separation"/>
    <footer className="footer">
      <div className="logos">
        <a href="https://www.linkedin.com/in/nicolas-garilliere-4695b519b/" target="_blank" rel="noreferrer" className="logo"><FaLinkedin/></a>
        <a href="mailto:nicolas.nithoam@gmail.com" target="_blank" rel="noreferrer" className="logo"><FaMailBulk/></a>
        <a href="https://github.com/Nithoam" target="_blank" rel="noreferrer" className="logo"><FaGithub/></a>
        {
          // <Link to="/about"  className="logo"><FaInfoCircle/></Link>
        }

      </div>
    </footer>
  </>
);

export default Footer;
