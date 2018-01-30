import React from 'react';
import Paper from 'material-ui/Paper';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

class ConvertedItems extends React.Component {

  render(){
    console.log(this.props)
    let convertedTotal = 0;
    let price = 1;

    let convertedList = this.props.products.map((product, index) => {
      this.props.baseCurrency ? price = this.props.baseCurrencyRate : price
      if(this.props.data.finalItems.includes(index)){
        convertedTotal += (product.price * this.props.chosenCurrencyRate * price)
        return (
          <ListItem button>
            <ListItemText primary={product.name} />
            <ListItemText primary={<span>{(product.price * this.props.chosenCurrencyRate * price).toFixed(2)} - {this.props.chosenCurrency}</span>} />
          </ListItem>
        );
      }
    });
    return(
      <React.Fragment>
        <Paper>
          <h1>Converted Items</h1>
          <Divider />
          <List>
            {convertedList}
          </List>
          <Divider />
          <Typography type="headline" gutterBottom>
            Total: <span style={{float: "right"}}> {convertedTotal.toFixed(2)} {this.props.chosenCurrency}</span>
          </Typography>
        </Paper>
      </React.Fragment>
    )
  }
}
export default ConvertedItems;
