import React, { Component } from 'react';
import './App.css';
import Button from 'material-ui/Button';
import Router from './Router';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currencyquotes: []
    }
    this.apiRequest = this.apiRequest.bind(this);
  }
  apiRequest(){
    const url = "http://apilayer.net/api/live?access_key=0833e883a2f3f36c40bc7b7a5ebef033"
    fetch(url)
    .then(function(response){
      if(response.ok){
        console.log("Successful request");
        return response.json();
      }
      throw new Error("Network response not OK")
    })
    .then(data => {
      this.setState({currencyquotes: data});
    })
    .catch(error => {
      console.log(error.message);
    });
  }

  componentDidMount(){
    this.apiRequest();
  }
  render() {
    console.log(this.state.currencyquotes);
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
