import React from 'react';

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
      <select onChange={this.handleSelection}>{list}</select>

    </React.Fragment>
    )
  }
}

export default CurrencySelector;
