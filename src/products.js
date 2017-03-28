import React from 'react';

export default class Products extends React.Component {
	render(){
		return(
			<div className="container"> 
				<h1>Products</h1>
				<ul className='list-group'>
					{
						this.props.products.map((product)=> {
							return (
								<li key={product.id} className='list-group-item'>{product.name} </li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}