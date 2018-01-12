import React, { Component } from 'react';
import dashboard from './components/dashboard';
import search from './components/search';
import {Route, Switch} from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={dashboard} />
          <Route path='/search' component={search} />
        </Switch>
      </div>
    );
  }
}

export default App;
