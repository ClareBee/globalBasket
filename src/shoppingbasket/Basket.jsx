import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

class Basket extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Paper>
        <Typography type="headline" component="h3">
          This will be the shopping list.
        </Typography>
      </Paper>
    )
  }
}

export default Basket;
