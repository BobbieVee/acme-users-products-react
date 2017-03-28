import React from "react";


export default class Tabs extends React.Component{
	render(){
		return(
			<div className='container'> 	
				<ul className='nav nav-tabs'>
					<li id='users' className={this.props.activeTab==='users'?'active':''}><a onClick={() => this.props.changeActive('users')} >Users</a></li>
					<li id='products' className={this.props.activeTab==='products'?'active':''}><a onClick={() => this.props.changeActive('products')} >Products</a></li>
				</ul> 	
			</div>
		)
	}
}