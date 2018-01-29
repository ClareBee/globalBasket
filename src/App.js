import React, { Component } from 'react';
import './App.css';
import Router from './Router';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import {ProductData} from './ProductData';
import basket from './images/basket.jpg';
import LatestTimeDisplay from './shoppingbasket/LatestTimeDisplay';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currencyquotes: [],
      countries: [],
      baseCurrency: "",
      baseCurrencyRate: null
    }
    this.apiRequest = this.apiRequest.bind(this);
    this.countriesApiRequest = this.countriesApiRequest.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
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

  changeCurrency(code){
    let rates = this.state.currencyquotes.quotes;
    Object.keys(rates).map(rate => {
      if(code === rate){
        this.setState({
          baseCurrencyRate: rates[rate],
          baseCurrency: rate
        });
      }
    });
    if(code === "USD"){
      this.setState({
        baseCurrency: "USD",
        baseCurrencyRate: null
      })
    }
}
  componentDidMount(){
    this.apiRequest();
  }

  render() {
    let rates = this.state.currencyquotes.quotes;
    console.log(this.state.countries);
    console.log(ProductData);
    console.log(this.state.baseCurrency);
    console.log(this.state.baseCurrencyRate);
    console.log(this.state.currencyquotes.timestamp)
    let time = this.state.currencyquotes.timestamp;
    return (
      <div className="App">
        <Grid item xs={12}>
          <Paper>
            <img width="200" alt="basket" src={basket} />
            <Typography type="display3" gutterBottom>
              Global Basket
            </Typography>
            <LatestTimeDisplay time={time}/>
          </Paper>
        </Grid>
        <Router data={this.state} products={ProductData} changeCurrency={this.changeCurrency}/>
      </div>
    );
  }
}

export default App;
