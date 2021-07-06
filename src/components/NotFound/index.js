import React from 'react';
import { FaSnowflake } from 'react-icons/fa';
import './notfound.scss'

const NotFound = () => {
  
  const sentences = {
    1: {
      text:"Not Found",
      class:"base"
    },
    2: {
      text:"Cette page a été ensevellie par une tempête de neige",
      class: "storm",
    },
    3: {
      text: "Vous avez du vous tromper de piste",
      class: "ski"
    }
  
  }
  /*
  const getRandomInt = () => {
    var random = Math.floor(Math.random() * sentences.length);
    return random
  }
*/
  return(
    <div className="not-found">
      <p>4<FaSnowflake/>4</p>
      <p className={sentences[1].class}>{sentences[1].text}</p>
    </div>
  );
  }
export default NotFound;
