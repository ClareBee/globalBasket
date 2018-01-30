import React from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
const styles = {
  selection: {
    fontSize: "20px",
    borderRadius: "5px"
  }
}
class CurrencySelector extends React.Component {
  constructor(props){
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }


  handleSelection(event){
    this.props.onSelect(event.target.value);
  }
  render(){
    let list = [];
    if(this.props.data.countries){
      let countryOptions = this.props.data.countries;
      list = Object.keys(countryOptions).map(code => {
      return <option key={code} value={code}>{code} - {countryOptions[code]}</option>
    });
  }

    return(
      <React.Fragment>
        <Grid container xs={12}>
          <Grid item xs={6}>
          <Typography style={{float: "right"}} type="headline">Choose a currency:</Typography>
        </Grid>
            <select style={styles.selection} onChange={this.handleSelection}>{list}</select>
        </Grid>
      </React.Fragment>
    );
  }
}

export default CurrencySelector;
