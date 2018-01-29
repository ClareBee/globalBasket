import React from 'react';
import ProductList from './ProductList';
import LatestTimeDisplay from './LatestTimeDisplay';
import CheckoutButton from './CheckoutButton';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import Grid from 'material-ui/Grid';
import Basket from './Basket';

class BasketContainer extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      basketContents: [],
      currencyCode: "",
      currencySwitch: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleProducts = this.handleProducts.bind(this);
  }
  handleChange(event, checked){
    this.setState({
      currencySwitch: checked
    })
    if(!this.state.currencySwitch){
      this.props.changeCurrency("USDGBP");
    } else {
      this.props.changeCurrency("USD");
    }
  }
  handleProducts(arr){
    this.setState({
      basketContents: arr
    })
  }

  render(){
    return(
      <React.Fragment>
        <i className="material-icons">shopping_basket</i>
        <FormGroup>
          <FormControlLabel
            control={ <Switch
            checked={this.state.currencySwitch}
            onChange={this.handleChange}
          />
          }
            label="GBP"
          />
        </FormGroup>
        <React.Fragment>
          <h1>Product list</h1>
          <Grid container spacing={24}>
        <ProductList {...this.props} handleProducts={this.handleProducts}/>
        <Grid item xs={4}>
          <Basket chosenProducts={this.state.basketContents}/>
        </Grid>
      </Grid>
    </React.Fragment>
        <CheckoutButton />
      </React.Fragment>
    )
  }
}

export default BasketContainer;
