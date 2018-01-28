import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'material-ui/Button';

class CheckoutButton extends React.Component{
  render(){
    return(
      <Link to="/checkout"><Button raised color="primary">Checkout</Button></Link>
    )
  }

}
export default CheckoutButton;
