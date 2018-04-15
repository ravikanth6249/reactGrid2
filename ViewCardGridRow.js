import React, { Component } from 'react';

const sortDataFunction=(array,optionsList)=>
{
 console.log("optionsList",optionsList);
 return array.sort(function (v1, v2) {
		if ( optionsList.sortDir === "ZtoA" ) {
			let t=v1; v1=v2; v2=t; // swap the parms
		}
		let sFld= optionsList.sortBy;
		if ( typeof v1[sFld]==="number" ) {      
		   if ( v1[sFld] < v2[sFld] ) return -1; 
		   if ( v1[sFld] > v2[sFld] ) return 1;
		} 
		else { // string
		   if ( v1[sFld].toLowerCase() < v2[sFld].toLowerCase() ) return -1; 
		   if ( v1[sFld].toLowerCase() > v2[sFld].toLowerCase() ) return 1; 
		}
		//------------------------------- check for and handle secondary sort key
		if ( optionsList.sortBy2 > "" ) {
			if ( optionsList.sortDir==="AtoZ" && optionsList.sortDir2==="ZtoA" ) {
				let t=v1; v1=v2; v2=t; // swap the parms
			}
			sFld= optionsList.sortBy2;
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
    });
}

const ViewCardGridRow =(props) =>
{		
        this.data= sortDataFunction(props.data,props.srtOptions);		 
		return(		 
		 this.data.map((row)=> {
		  return (	
			<tr  key={'mykey' + Math.floor(Math.random() * 50)}>
			  {props.cols.map((column)=> {
				return <td align="center" key={'mykey' + Math.floor(Math.random() * 20)}>{row[column]}</td>; })}
			</tr>
		  );		 
		}) 	); 
}
 
export default ViewCardGridRow;