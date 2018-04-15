import React, { Component } from 'react';

class ViewCardGridRow extends Component
{
	constructor(props)
	{
	 super(props);
	 console.log("props",this.props);	
	}
	render()
	 { 
	 	 return( this.props.data.map((row)=> {
		  return (	
			<tr  key={'mykey' + Math.floor(Math.random() * 50)}>
			  {this.props.cols.map((column)=> {
				return <td align="center" key={'mykey' + Math.floor(Math.random() * 20)}>{row[column]}</td>; })}
			</tr>
		  );		 
		}) 	);
	 }
}

export default ViewCardGridRow;