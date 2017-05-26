import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Jumbotron from './components/Jumbotron';
import Table from './components/PasswordList';
import Navigation from './components/Navigation';
import AddPassword from './components/AddPassword';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Jumbotron />
          <Navigation />
          <Route path={'/password-list'} component={Table} />
          <Route path={'/add-password'} component={AddPassword} />
        </div>
      </Router>

    );
  }
}

export default App;
