import React  from 'react';

this.sortData = (v1,v2) =>
{
	console.log("V1 V2",v1,v2);
		if ( this.data.sortDir === "ZtoA" ) {
			let t=v1; v1=v2; v2=t; // swap the parms
		}
		let sFld= this.data.sortBy;
				console.log("sFld",sFld);
		if ( typeof v1[sFld]==="number" ) {      
		   if ( v1[sFld] < v2[sFld] ) return -1; 
		   if ( v1[sFld] > v2[sFld] ) return 1;
		} 
		else { // string
		   if ( v1[sFld].toLowerCase() < v2[sFld].toLowerCase() ) return -1; 
		   if ( v1[sFld].toLowerCase() > v2[sFld].toLowerCase() ) return 1; 
		}
		//------------------------------- check for and handle secondary sort key
		if ( this.data.sortBy2 > "" ) {
			if ( this.data.sortDir==="AtoZ" && this.data.sortDir2==="ZtoA" ) {
				let t=v1; v1=v2; v2=t; // swap the parms
			}
			sFld= this.data.sortBy2;
			if ( typeof v1[sFld]==="number" ) { 
			   if ( v1[sFld] < v2[sFld] ) return -1; 
			   if ( v1[sFld] > v2[sFld] ) return 1;
			}
			else { // string
				if ( v1[sFld].toLowerCase() < v2[sFld].toLowerCase() ) return -1; 
				if ( v1[sFld].toLowerCase() > v2[sFld].toLowerCase() ) return 1; 
			} 
		}
		return 0; 
}
const DoSorting =(props) =>
{

		this.data=props.data;
		this.data.sortBy = "Service"; 
		this.data.sortDir= "ZtoA";
		this.data.sortBy2= "Cost";   // set a secondary sort
		this.data.sortDir2= "ZtoA";
		
		console.log("ravi",this.data);
		let jitta= this.data.sort( this.sortData );	
		 
		console.log("ravi2",jitta);
		return(
		<table border='2'>
			<thead>
				  <tr>
					{props.cols.map(function(column) {
					  return <th>{column}</th>; })}
				</tr>
			</thead>
		 
		 { this.data.map((row)=> {
		  return (	
			<tr  key={'mykey' + Math.floor(Math.random() * 50)}>
			  {props.cols.map((column)=> {
				return <td align="center" key={'mykey' + Math.floor(Math.random() * 20)}>{row[column]}</td>; })}
			</tr>
		  );		 
		}) }</table>	); 
}
 
export default DoSorting;