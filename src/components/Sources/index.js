import React from 'react';
import petitCV from './petitCV.png';
import './sources.scss';

const Sources = () => {
  return(
    <div className="sources">
      
      <a href='https://drive.google.com/file/d/1ToAmeouHPwswSgItT90xr1f7LbQDTW-8/view?usp=sharing'>
        <img className="CV sources-element" src={petitCV} alt="."></img>
      </a>
      
      <a href='https://github.com/Nithoam/React-App-Portfolio'>
        <img className="portFolio sources-element" src={petitCV} alt="."></img>
      </a>
    
    </div>
  );
  }
export default Sources;
