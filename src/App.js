import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Menu from './components/Menu';
import FilmList from './pages/FilmList';
import PeopleList from './pages/PeopleList';
import PlanetsList from './pages/PlanetsList';
import VehiclesList from './pages/VehiclesList';
import StarShipsList from './pages/StarShipsList';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
      <div className="container">
          <Route exact path={'/'} component={FilmList} />      
          <Route exact path={'/Peliculas'} component={FilmList} />
          <Route exact path={'/Personajes'} component={PeopleList} />
          <Route exact path={'/Planetas'} component={PlanetsList} />
          <Route exact path={'/Vehiculos'} component={VehiclesList} />
          <Route exact path={'/CrucerosEspaciales'} component={StarShipsList} />
      </div>
      </div>
    );
  }
}

export default App;