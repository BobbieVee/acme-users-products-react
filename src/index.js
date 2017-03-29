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
		this.deleteProduct = this.deleteProduct.bind(this);
		this.createProduct = this.createProduct.bind(this);
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

	deleteProduct(productId, index){
		this.state.products.splice(index,1);
		this.setState({});
		axios.delete(`/api/products/${productId}`);
	}

	createProduct(name){
		axios.post('/api/products/', {name: name})
		.then((product)=>{
			this.state.products.push(product.data);
			this.state.productTotal = this.state.products.length;
			this.setState({});
		})
	}

	render(){
		return(
			<div className='container'>
				< Tabs userTotal = {this.state.userTotal} productTotal={this.state.productTotal} activeTab={this.state.activeTab} changeActive={this.changeActive} />
				{this.state.activeTab === 'users'? < Users users={this.state.users}/> : < Products products={this.state.products} createProduct={this.createProduct} deleteProduct={this.deleteProduct}/>}
			</div>
		)
	}
}

ReactDOM.render(<Main /> , document.getElementById('app'));



