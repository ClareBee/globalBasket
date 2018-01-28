import React from 'react';
import CurrencySelector from './CurrencySelector';

class CheckoutContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chosenCurrency: "",
      chosenCurrencyRate: 0
    }
    this.handleChosenCurrency = this.handleChosenCurrency.bind(this);
  }

  handleChosenCurrency(code){
    let apiCode = `USD${code}`;
    let apiRates = this.props.data.currencyquotes.quotes;
    if(apiRates){
      Object.keys(apiRates).map(rate => {
        if(rate == apiCode){
        console.log(apiRates[rate])
        console.log("found it")
        this.setState({
          chosenCurrencyRate: apiRates[rate]
        });
      }
    });
  }
}



  render(){
    console.log(this.props.data);
    return(
      <React.Fragment>
        <h1>checkout</h1>
        <CurrencySelector onSelect={this.handleChosenCurrency} data={this.props.data}/>
      </React.Fragment>
    )
  }
}

export default CheckoutContainer;
