import React from 'react';

class CurrencySelector extends React.Component {

  componentDidMount(){
    let countryOptions = this.props.data.countries;
    console.log(countryOptions);
    let options = countryOptions.map(country => {
        return <option>{country}</option>
    });
  }
  render(){
    console.log(this.props.data.countries);
    let list = [];
    if(this.props.data.countries){
    let countryOptions = this.props.data.countries;
     list = Object.keys(countryOptions).map(code => {
      return <option>{code}{countryOptions[code]}</option>
    })
  }

    return(
      <select>{list}</select>
    )
  }
}

export default CurrencySelector;
