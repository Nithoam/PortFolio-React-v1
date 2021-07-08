import React from 'react';
import Typewriter from 'typewriter-effect';
import './home.scss';

const Home = () => (
  <div className="home main-component">
    <div className="home-welcome">
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString('<span class="b">C</span>here visiteuse, cher visiteur')
          .pauseFor(1000)
          .deleteAll()
          .typeString('<span class="b">B</span>ienvenue !')
          .start();
      }}
    />
    </div>
    <div className="home-border-picture"></div>
    <p className="home-search"> </p>
  </div>
);

export default Home;
