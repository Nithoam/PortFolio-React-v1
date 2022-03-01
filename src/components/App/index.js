// == Import npm
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


// == Import
import Snow from '../Snow';
import Header from '../Header';
import Home from '../Home';
import Nav from '../Nav';
import Footer from '../Footer';
import Formations from '../Formations';
import Skills from '../Skills';
import Experiences from '../Experiences';
import NotFound from '../NotFound';
import Projets from '../Projets';
import './styles/_reset.css';
import './app.scss';
import './styles/index.scss';
import './styles/app.js'

// == Composant
const App = () => {
  
  /*
  activate or stop snow ! fonction toggle
  */
  const [snow, setSnow] = useState(true);

  const snowing = () =>{
    setSnow(!snow)
  };
  
  
  /*
  dark/light mode
  */

  const [sun, setSun] = useState(false);

  const sunning = () =>{
    setSun(!sun)
  };

  const body = document.querySelector('body');
  if (sun){
    body.classList.remove('moon')
    body.classList.add('sun')
  } else {
    body.classList.remove('sun')
    body.classList.add('moon')
  }

  return(
    <>
    {snow && <Snow />}
    <div className="app">
      <Header snow={snow} snowing={snowing}  sun={sun} sunning={sunning}  />
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/competences" exact element={<Skills />}/>
        <Route path="/formations" exact element={<Formations />}/>
        <Route path="/experiences" exact element={<Experiences />}/>
        <Route path="/projets" exact element={<Projets />}/>
        <Route element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
    </>
  );
};
// == Export
export default App;
