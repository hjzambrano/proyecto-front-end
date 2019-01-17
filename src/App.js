import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Menu from './components/Menu';
import FilmList from './pages/FilmList';
import PeopleList from './pages/PeopleList';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
      <div className="container">
          <Route exact path={'/Peliculas'} component={FilmList} />
          <Route exact path={'/Personajes'} component={PeopleList} />
      </div>
      </div>
    );
  }
}

export default App;