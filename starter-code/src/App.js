import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import countries from '../src/countries.json'
import { Switch, Route } from 'react-router-dom';



import CountryDetail from './components/CountryDetail'
import { Link } from 'react-router-dom';

class App extends Component {

  constructor() {
    super()
    this.state = {
      countries : countries
    }
  }

  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-5" >
          <div className="list-group">
            {/* <a className="list-group-item list-group-item-action" href="/">🇦🇼</a> */}
            
          
                {this.state.countries.map((country, index) => {
               return <Link key={index} to={`/${country.cca3}`}> {country.flag} {country.name.common} 
                      </Link> })}


          </div>


        <Switch>
          <Route exact path='/:id' component={CountryDetail} />

        </Switch>

        </div>
        {/* <div className="col-7">
          <h1>{props.name.official}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{props.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{props.area}
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    <li>{props.borders.map((border) => {
                      console.log(border)
                      return border 
                    })} </li>
                    <li><a href="/AND">Andorra</a></li>
                    <li><a href="/BEL">Belgium</a></li>
                    <li><a href="/DEU">Germany</a></li>
                    <li><a href="/ITA">Italy</a></li>
                    <li><a href="/LUX">Luxembourg</a></li>
                    <li><a href="/MCO">Monaco</a></li>
                    <li><a href="/ESP">Spain</a></li>
                    <li><a href="/CHE">Switzerland</a></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
    </div>

    

        
    );
  }
}

export default App;
