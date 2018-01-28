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
    console.log(apiCode);
    this.setState({chosenCurrency: apiCode});
    //temporary test to link up this with other data
    console.log(this.props.data);
  }

  componentDidUpdate(){
    let apiRates = this.props.data.currencyquotes.quotes;
    let chosenRate = this.state.chosenCurrency;
    if(apiRates && chosenRate){
    Object.keys(apiRates).map(rate => {
      if(rate == chosenRate){
      console.log(apiRates[rate])
      console.log("found it")
      }
    })
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
