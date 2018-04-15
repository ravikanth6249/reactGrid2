import React, { Component } from 'react';

class viewCardsGridHeader extends Component
{
	constructor(props)
	{
	 super(props);
	}
	render()
	{
		var dataRows = this.props.cols;
		return(
			<thead>
				  <tr>
					{dataRows.map(function(column) {
					  return <th>{column}</th>; })}
				</tr>
			</thead>
		);
	}
} 
export default viewCardsGridHeader;