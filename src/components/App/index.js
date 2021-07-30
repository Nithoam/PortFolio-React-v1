// == Import npm
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';


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
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/competences" exact><Skills /></Route>
        <Route path="/formations" exact><Formations /></Route>
        <Route path="/experiences" exact><Experiences /></Route>
        <Route path="/projets" exact><Projets /></Route>
        <Route><NotFound/></Route>
      </Switch>
      <Footer />
    </div>
    </>
  );
};
// == Export
export default App;
