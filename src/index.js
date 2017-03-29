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
			activeTab: 'products',
			users: [],
			products: []
		};
		this.changeActive = this.changeActive.bind(this);
		this.deleteProduct = this.deleteProduct.bind(this);
		this.createProduct = this.createProduct.bind(this);
	}

	componentWillMount(){
		axios.get('/api/users')
		.then((res)=> res.data)
		.then((users) => {
			this.setState({users: users});
		});
		axios.get('/api/products')
		.then((res)=> res.data)
		.then((products) => {
			this.setState({products: products});
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
			this.setState({});
		})
	}

	render(){
		return(
			<div className='container'>
				< Tabs userTotal = {this.state.users.length} productTotal={this.state.products.length} activeTab={this.state.activeTab} changeActive={this.changeActive} />
				{this.state.activeTab === 'users'? < Users users={this.state.users}/> : < Products products={this.state.products} createProduct={this.createProduct} deleteProduct={this.deleteProduct}/>}
			</div>
		)
	}
}

ReactDOM.render(<Main /> , document.getElementById('app'));



