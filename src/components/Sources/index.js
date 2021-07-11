import React from 'react';
import CV from './CV.png';
import github from './github.png';
import './sources.scss';

const Sources = () => {
  return(
    <div className="sources">
      
      <a href='https://drive.google.com/file/d/1ToAmeouHPwswSgItT90xr1f7LbQDTW-8/view?usp=sharing'>
        <img className="CV sources-element" src={CV} alt="CV"></img>
      </a>
      
      <a href='https://github.com/Nithoam/React-App-Portfolio'>
        <img className="portfolio sources-element" src={github} alt="github"></img>
      </a>
    
    </div>
  );
  }
export default Sources;
