import React from 'react';
import Typewriter from 'typewriter-effect';
import './home.scss';

const Home = () => (
  <div className="home main-component">
    <div className="home-welcome">
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString('Bienvenue chez moi !')
          .deleteChars(10)
          .typeString('chez vous ! ')
          .deleteChars(12)
          .typeString('chez NOUS ! ')
          .start();
      }}
    />
    </div>
    <div className="home-border-picture"></div>
    <p className="home-search"> </p>
  </div>
);

export default Home;
