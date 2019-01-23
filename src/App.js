import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
          <Route exact path={'/peliculas'} component={FilmList} />
          <Route exact path={'/personajes'} component={PeopleList} />
          <Route exact path={'/planetas'} component={PlanetsList} />
          <Route exact path={'/vehiculos'} component={VehiclesList} />
          <Route exact path={'/cruceros-espaciales'} component={StarShipsList} />
        </div>
      </div>
    );
  }
}

export default App;