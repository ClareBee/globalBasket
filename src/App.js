import React, { Component } from 'react';
import './App.css';
import Button from 'material-ui/Button';
import Router from './Router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Button raised color="primary">
          checkout
        </Button>
        <Router />
      </div>
    );
  }
}

export default App;
