import React from 'react';
import ProductForm from './ProductForm';

export default class Products extends React.Component {
	render(){
		const deleteProduct=this.props.deleteProduct;
		const createProduct=this.props.createProduct;
		return(
			<div className="container"> 
				<h1>Products</h1>
				< ProductForm createProduct={this.props.createProduct}/>
				<ul className='list-group'>
					{
						this.props.products.map((product, index)=> {
							return (
								<li key={product.id} className='list-group-item clearfix'>
									{product.name}
									<button type='submit' onClick={()=> deleteProduct(product.id, index)} className="btn btn-danger pull-right">
										Delete 
									</button>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}