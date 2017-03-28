import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Tabs from './Tabs';
import Users from './users';
import Products from './products';


class Main extends React.Component{
	constructor(props){
		super();
		this.state = {
			activeTab: 'users',
			users: [],
			products: [],
			userTotal: 0,
			productTotal: 0
		};
		this.changeActive = this.changeActive.bind(this);
	}

	componentWillMount(){
		axios.get('/api/users')
		.then((res)=> res.data)
		.then((users) => {
			this.setState({users: users, userTotal: users.length});
		});
		axios.get('/api/products')
		.then((res)=> res.data)
		.then((products) => {
			this.setState({products: products, productTotal: products.length});
		})

	}

	changeActive(tab){
		if (tab !== this.state.activeTab) {
			this.setState({activeTab: tab});
		}
	}

	render(){
		return(
			<div className='container'>
				< Tabs userTotal = {this.state.userTotal} productTotal={this.state.productTotal} activeTab={this.state.activeTab} changeActive={this.changeActive} />
				{this.state.activeTab === 'users'? < Users users={this.state.users}/> : < Products products={this.state.products}/>}
			</div>
		)
	}
}

ReactDOM.render(<Main /> , document.getElementById('app'));



