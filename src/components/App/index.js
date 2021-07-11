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
import Experiences from '../Experiences';
import Skills from '../Skills';
// import Sources from '../Sources';
import NotFound from '../NotFound';
import Projets from '../Projets';
import './styles/_reset.css';
import './app.scss';
import './styles/index.scss';
import './styles/app.js'

// ok : S'occuper de la nav selected
// ok : Chercher un effet neige (ou etoiles) pour le background
// ok : Fonction activé/désactivé la neige (créer un state snow/setSnow = true et une fonction () => { setSnow: !snow})
// ok : S'occuper de la home
// ok : Composant Expérience
// ok : App : Reactiver la fonction Sun avec le theme light

// TODO : Composant Compétences
// TODO : Header : créer une barre rouge lorsque la fonction est désactivée
// TODO : Composant Projets : import caroussel (https://github.com/sag1v/react-elastic-carousel) 

// TODO : Composant Sources : Importer une photo de github et réactiver Sources (ainsi que son icone de lien dans le footer)
// TODO : Composant Sources : Créer un composant About et modifier le lien dans le footer (icone i)

// TODO : Composant NotFound : S'occuper de la fonction random ET du tableau de la page Not Found


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
        {
          // <Route path="/about" exact><Sources/></Route>
        }
        <Route><NotFound/></Route>
      </Switch>
      <Footer />
    </div>
    </>
  );
};
// == Export
export default App;
