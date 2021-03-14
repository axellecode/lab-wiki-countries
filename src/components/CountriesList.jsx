import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from './../countries.json';
import './../App.css';

class CountriesList extends Component {
    
    render() {
    return (
        <div className="container">
            <div className= "row">
                <div className="col-5" Style="max-height: 90vh; overflow: scroll">
                    <div class="list-group">
                            <ul>
                                {countries.map(country => (
                                <li key={country.cca3}>
                                <Link className="list-group-item list-group-item-action" to={`/${country.cca3}`}>
                                <small>{country.name.common}</small> 
                                </Link>
                                </li>
                                ))}
                            </ul> 
                    </div>        
                </div>               
           </div>
        </div>
    )};
}

export default CountriesList
