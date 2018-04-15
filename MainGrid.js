import React, { Component } from 'react';
import ViewCardsGridHeader from './viewCardsGridHeader';
import ViewCardGridRow from './ViewCardGridRow';

class MainGrid extends Component
{
	state =
	  {
		columns: ['Service', 'Cost/Unit', 'Unit', 'Units Requested'],
		rows: [{
		'Service': 'Veterinary Assitance',
		'Cost/Unit': 50,
		'Unit': '1 Hour',
		'Units Requested': 12
		}, {
		'Service': 'Veterinary Assitance',
		'Cost/Unit': 50,
		'Unit': '1 Hour',
		'Units Requested': 12
		 }, {
		'Service': 'Veterinary Assitance',
		'Cost/Unit': 50,
		'Unit': '1 Hour',
		'Units Requested': 12
		  }, {
		'Service': 'Veterinary Assitance',
		'Cost/Unit': 50,
		'Unit': '1 Hour',
		'Units Requested': 12
		 }, {
		'Service': 'Veterinary Assitance',
		'Cost/Unit': 50,
		'Unit': '1 Hour',
		'Units Requested': 12
		}, {
		'Service': 'Veterinary Assitance',
		'Cost/Unit': 50,
		'Unit': '1 Hour',
		'Units Requested': 12
		}, {
		'Service': 'Veterinary Assitance',
		'Cost/Unit': 50,
		'Unit': '1 Hour',
		'Units Requested': 12
		}, {
		'Service': 'Veterinary Assitance',
		'Cost/Unit': 50,
		'Unit': '1 Hour',
		'Units Requested': 12
		 }, {
		'Service': 'Veterinary Assitance',
		'Cost/Unit': 50,
		'Unit': '1 Hour',
		'Units Requested': 12
		 }, {
		'Service': 'foo',
		'Unit': null,
		'Cost/Unit': undefined,
		'Units Requested': 42
	  }]
	};	
	render()
	{
		return(
			 <table className="table table-bordered table-hover" border="1" width="100%">
				<ViewCardsGridHeader cols={this.state.columns} />
				<ViewCardGridRow cols={this.state.columns} data={this.state.rows} />		
			 </table>
		);
	}
} 

export default MainGrid;