import React from 'react';
import Paper from 'material-ui/Paper';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

class SelectedItems extends React.Component {
  render(){
    console.log(this.props.data.finalItems)
    console.log(this.props.products)
    let totalPrice = 0;
    let finalList = this.props.products.map((product, index) => {
      if(this.props.data.finalItems.includes(index)){
        totalPrice += product.price;
        return (
          <ListItem button>
            <ListItemText primary={product.name} />
            <ListItemText primary={product.price.toFixed(2)} />
          </ListItem>
        );
      }
    });
    return(
      <React.Fragment>
        <Paper>
          <h1>Final choice</h1>
          <Divider />
          <List>
            {finalList}
          </List>
          <Divider />
          <Typography type="headline" gutterBottom>
            Total: {totalPrice.toFixed(2)}
          </Typography>
        </Paper>
      </React.Fragment>
    )
  }
}
export default SelectedItems;
