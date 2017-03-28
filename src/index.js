import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';


class Main extends React.Component{
	constructor(props){
		super();
		this.state = {
			activeTab: 'users'
		};
		this.changeActive = this.changeActive.bind(this);
	}
	
	changeActive(tab){
	console.log('changeActive to :', tab)		
	this.setState({activeTab: tab});
	console.log('activeTab = ', this.state.activeTab);

	}
	render(){
		return(
			< Tabs activeTab={this.state.activeTab} changeActive={this.changeActive} />
		)
	}
}

ReactDOM.render(<Main /> , document.getElementById('app'));



