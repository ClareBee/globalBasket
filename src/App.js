import React, { Component } from 'react';
import './App.css';
import Router from './Router';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import {ProductData} from './ProductData';


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
    this.countriesApiRequest();
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
  }
  render() {
    console.log(this.state.currencyquotes.quotes);
    console.log(this.state.countries);
    console.log(ProductData);
    return (
      <div className="App">
        <Grid item s={12}>
          <Paper>xs=12</Paper>
        </Grid>
        <Router data={this.state} products={ProductData}/>
      </div>
    );
  }
}

export default App;
