import React from 'react';


export default class App extends React.Component{
    constructor(props){
	super(props);
	this.state = {
	    name : ''
	};
    }

    render(){
	return (
		<div>
		<button onClick={()=>{ this.setState({name:'!@@@@!!!'}) }}> Click Me </button>
		<h1>Hello!!!!!!dd!{this.state.name}</h1>
		</div>
	);
    }
}
