import React, { Component } from 'react';
import logo from './logo.svg';
import MainGrid from './MainGrid';
 
import './App.css';



class App extends Component {
	constructor() {
    super();
	this.cols= ['Service', 'Cost', 'Unit', 'Units Requested'];
    this.arArticles = [{
		'Service': 'Aavi',
		'Cost': 960,
		'Unit': '1 Hour',
		'Units Requested': 12
		}, {
		'Service': 'Veterinary Assitance',
		'Cost': 520,
		'Unit': '1 Hour',
		'Units Requested': 12
		 }, {
		'Service': 'Veterinary Assitance',
		'Cost': 350,
		'Unit': '1 Hour',
		'Units Requested': 12
		  }, {
		'Service': 'Veterinary Assitance',
		'Cost': 350,
		'Unit': '1 Hour',
		'Units Requested': 12
		 }, {
		'Service': 'Veterinary Assitance',
		'Cost': 450,
		'Unit': '1 Hour',
		'Units Requested': 12
		}, {
		'Service': 'Veterinary Assitance',
		'Cost': 950,
		'Unit': '1 Hour',
		'Units Requested': 12
		}, {
		'Service': 'Veterinary Assitance',
		'Cost': 450,
		'Unit': '1 Hour',
		'Units Requested': 12
		}, {
		'Service': 'Veterinary Assitance',
		'Cost': 950,
		'Unit': '1 Hour',
		'Units Requested': 12
		 }, {
		'Service': 'Veterinary Assitance',
		'Cost': 550,
		'Unit': '1 Hour',
		'Units Requested': 12
		 }, {
		'Service': 'foo',
		'Unit': null,
		'Cost': undefined,
		'Units Requested': 42
	  }];
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<MainGrid cols={this.cols} data={this.arArticles} />
      </div>
    );
  }
}

export default App;
