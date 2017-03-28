import React from 'react';

export default class Products extends React.Component {
	render(){
		const deleteProduct=this.props.deleteProduct;
		return(
			<div className="container"> 
				<h1>Products</h1>
				<ul className='list-group'>
					{
						this.props.products.map((product, index)=> {
							return (
								<li key={product.id} className='list-group-item clearfix'>
									{product.name}
									<button onClick={()=> deleteProduct(product.id, index)} className="btn btn-danger pull-right">
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