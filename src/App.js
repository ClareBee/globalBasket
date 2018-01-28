import React, { Component } from 'react';
import './App.css';
import Button from 'material-ui/Button';
import Router from './Router';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currencyquotes: [],
      countries: []
    }
    this.apiRequest = this.apiRequest.bind(this);
    this.countriesApiRequest = this.countriesApiRequest.bind(this);
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
  countriesApiRequest(){
    const url = "http://apilayer.net/api/list?access_key=0833e883a2f3f36c40bc7b7a5ebef033"
    fetch(url)
    .then(function(response){
      if(response.ok){
        console.log("Successful request");
        return response.json();
      }
      throw new Error("Network response not OK")
    })
    .then(data => {
      this.setState({countries: data.currencies});
    })
    .catch(error => {
      console.log(error.message);
    });
  }

  componentDidMount(){
    this.apiRequest();
    this.countriesApiRequest();
  }
  render() {
    console.log(this.state.currencyquotes.quotes);
    console.log(this.state.countries);
    return (
      <div className="App">
        <Button raised color="primary">
          checkout
        </Button>
        <Router data={this.state}/>
      </div>
    );
  }
}

export default App;
