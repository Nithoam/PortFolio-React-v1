import React from 'react';
import { FaSnowflake } from 'react-icons/fa';
import './notfound.scss'

const NotFound = () => {
  
  const sentences = [
    {
      content:"Not Found",
     // class:"base"
    },
    {
      content:"Cette page a été ensevellie par une tempête de neige",
      // class: "storm",
    },
    {
      content: "Vous avez dû vous tromper de piste",
     // class: "ski"
    },
    {
      content: "Le terrible yeti des neiges à ingéré cette page",
     // class: "yeti"
    }
  ]
  
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let random = getRandomInt(0, sentences.length - 1);
  
  console.log(random)
  return(
    <div className="notFound">
      <p className="notFound-fixContent">4<FaSnowflake/>4</p>
      <p className="notFound-randomContent" /*className={sentences[random].class}*/>{sentences[random].content}</p>
    </div>
  );
  }
export default NotFound;
