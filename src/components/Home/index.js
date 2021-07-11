import React from 'react';
import Typewriter from 'typewriter-effect';
// import { Link } from 'react-router-dom'
import './home.scss';

const Home = () => (
  <div className="home main-component">
    <div className="home-welcome">
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString('<span class="calligraphy">C</span>hère visiteuse, cher visiteur')
          .pauseFor(1000)
          .deleteAll()
          .typeString('<span class="calligraphy">B</span>ienvenue !')
          .start();
      }}
    />
    </div>
    <div className="home-border-picture"></div>
    {
      // <Link className="about" to="/sources">À propos du projet</Link>
    }
  </div>
);

export default Home;
