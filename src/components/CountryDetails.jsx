import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from './../countries.json';
import './../App.css';

class CountryDetails extends Component {
  state = {
    country: null,
  };

  loadCountry = () => {
    const country = countries.find(
      (item) => item.cca3 === this.props.match.params.cca3
    );
    this.setState({
      country: country,
    });
  };

  componentDidMount() {
    this.loadCountry();
  }

  componentDidUpdate(previousProps) {
    if (this.props.match.params.cca3 !== previousProps.match.params.cca3) {
      this.loadCountry();
    }
  }

  render() {
    const country = this.state.country;

    return (
      <div>
        {country && (
          <>
            <h1>{country.name.common}</h1>
            <strong>Capital: </strong>
            <span>{country.capital[0]}</span>
            <br />
            <strong>Area: </strong>
            <span>{country.area} km2</span>
          </>
        )}
      </div>
    );
  }
}

export default CountryDetails;
