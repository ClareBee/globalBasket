import React from 'react';
import Grid from 'material-ui/Grid';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';


class ProductList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props)
    return(
      <React.Fragment>
        <h1>Product list</h1>
          <Grid container spacing={24}>
            <Grid item xs={8}>
              <GridList cols={2} cellHeight={250}>

                <GridListTile>
                  <img alt="default image" src={this.props.products[0]['image']} />
                  <GridListTileBar
              title={<span>Product</span>}
              subtitle={<span>cost</span>}
              actionIcon={
                <React.Fragment>
                <IconButton>
                  <Icon  style={{ fontSize: 36 }}>
                      delete
                  </Icon>
                </IconButton>
                <IconButton>
                  <Icon color="primary" style={{ fontSize: 36 }}>
                      add_circle
                  </Icon>
                </IconButton>
              </React.Fragment>
              }
            />
          </GridListTile>
          <GridListTile>
            <img src="https://image.freepik.com/free-icon/question-mark_318-52837.jpg" />
            <GridListTileBar
              title={<span>Product Name</span>}
              subtitle={<span>cost</span>}
              actionIcon={
                <IconButton>
                  <Icon color="primary" style={{ fontSize: 36 }}>
                    add_circle
                  </Icon>
                </IconButton>
              }
            />
          </GridListTile>
        </GridList>
      </Grid>
      <Grid item xs={4}>
        <Paper>
          <Typography type="headline" component="h3">
            This will be the shopping list.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
      </React.Fragment>
    )
  }
}
export default ProductList;
