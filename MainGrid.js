import React, { Component } from 'react';
import ViewCardsGridHeader from './viewCardsGridHeader';
import ViewCardGridRow from './ViewCardGridRow';

class MainGrid extends Component
{
	state =
	  {
		columns: ['Service', 'Cost', 'Unit', 'Units Requested'],
		rows:  [{
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
	  }],
	 sortOptions:
	 {
		sortBy : "Service",
		sortDir : "AtoZ",
		sortBy2 :"Cost",   // set a secondary sort
		sortDir2: "ZtoA"
     }
	};	
	render()
	{
		return(
			 <table className="table table-bordered table-hover" border="1" width="100%">
				<ViewCardsGridHeader cols={this.state.columns} />
				<ViewCardGridRow srtOptions={this.state.sortOptions} cols={this.state.columns} data={this.state.rows} />		
			 </table>
		);
	}
} 

export default MainGrid;