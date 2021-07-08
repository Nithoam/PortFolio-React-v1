// == Import npm
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
// import SlideRoutes from 'react-slide-routes';

// == Import
import Snow from '../Snow';
import Header from '../Header';
import Home from '../Home';
import Nav from '../Nav';
import Footer from '../Footer';
import Formations from '../Formations';
import Experiences from '../Experiences';
import Skills from '../Skills';
import Faq from '../Faq';
import NotFound from '../NotFound';
import Projets from '../Projets';
import './_reset.css';
import './app.scss';
import './index.scss';
import './app.js'

// ok : S'occuper de la nav selected
// ok : Chercher un effet neige (ou etoiles) pour le background

// TODO : S'occuper de la home
// TODO : S'occuper des paragraphe du composants Formations
// TODO : S'occuper de créer une barre rouge lorsque la fonction est désactivée

//! Incompatible avec Switch ? :  slideroute (https://github.com/nanxiaobei/react-slide-routes)
// TODO : import caroussel (https://github.com/sag1v/react-elastic-carousel) + utilisation du caroussel dans les composants
// TODO : S'occuper de la fonction random ET du tableau de la page Not Found

// TODO : Enlever le curseur sur mobile

// ok : Fonction activé/désactivé la neige (créer un state snow/setSnow = true et une fonction () => { setSnow: !snow})

// == Composant
const App = () => {
// const location = useLocation();
  const [snow, setSnow] = useState(true);

  // const [sun, setSun] = useState(false);

  const snowing = () =>{
    setSnow(!snow)
  };
/*
  const sunning = () =>{
    setSun(!sun)
  };
*/
  

  return(
    <>
    {snow && <Snow />}
    <div className="app">
      <Header snow={snow} snowing={snowing} /* sun={sun} sunning={sunning} */ />
      <Nav />
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/competences" exact><Skills /></Route>
        <Route path="/formations" exact><Formations /></Route>
        <Route path="/experiences" exact><Experiences /></Route>
        <Route path="/projets" exact><Projets /></Route>
        <Route path="/faq" exact><Faq/></Route>
        <Route><NotFound/></Route>
      </Switch>
      <Footer />
    </div>
    </>
  );
};
// == Export
export default App;
