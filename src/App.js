import React, { Component } from 'react';
import './App.css';
import Router from './Router';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import {ProductData} from './ProductData';
import basket from './images/basket.jpg';
import currencies from './images/currencies.jpg';
import LatestTimeDisplay from './shoppingbasket/LatestTimeDisplay';

const styles = {
    currencyImage: {
        backgroundImage: `url(${currencies})`,
        opacity: "0.8",
        filter: "grayscale(100%)"
    },
    title: {
      display: "table",
      background: "white",
      border: "10px solid black",
      borderRadius: "8px",
      padding: "10px"
    }
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currencyquotes: [],
      countries: [],
      baseCurrency: "",
      baseCurrencyRate: null,
      finalItems: []
    }
    this.apiRequest = this.apiRequest.bind(this);
    this.countriesApiRequest = this.countriesApiRequest.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
    this.handleBasketItems = this.handleBasketItems.bind(this);
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
  handleBasketItems(arr){
    var finalChoice = this.state.finalItems;
    var finalData = finalChoice.concat(arr)
    this.setState({
      finalItems: finalData
    })
    console.log(this.state.finalItems)
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
      <div container xs={12} className="App">
          <Paper style={{marginBottom: "30px"}}>
            <Grid container style={styles.currencyImage}>
              <Grid item xs={4}>
                <Typography type="display3" gutterBottom style={styles.title}>
                  Global Basket <i style={{fontSize: "1em"}} class="material-icons">shopping_basket</i>
                </Typography>
              </Grid>
              <Grid item xs={4}>
              </Grid>
              <Grid item xs={4}>
                <LatestTimeDisplay time={time}/>
              </Grid>
            </Grid>
          </Paper>
          <Divider style={{marginBottom: "20px"}}/>
        <Router finaliseList={this.handleBasketItems} data={this.state} products={ProductData} changeCurrency={this.changeCurrency}/>
      </div>
    );
  }
}

export default App;
