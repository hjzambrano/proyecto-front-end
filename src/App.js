import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Menu from './components/Menu';
import FilmList from './pages/FilmList';
import CartList from './pages/CardList';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
      <div className="container">
          <Route exact path={'/'} component={FilmList} />
          <Route exact path={'/cart'} component={CartList} />
      </div>
      </div>
    );
  }
}

export default App;