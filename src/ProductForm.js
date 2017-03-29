import React from 'react';


export default class ProductForm extends React.Component{
	constructor(props){
		super();
		this.state = {name: ''};
		this.onChangeName = this.onChangeName.bind(this);
		this.createProduct = (ev)=> {
			this.props.createProduct(this.state.name);
			this.setState({name: ''})
		}
	}

	onChangeName(e){
		const name = e.target.value;
		this.setState({name});
	}

	render(){	
		return(
			<div>
				<form>
					<div className='form-group'>
						<label > 
							New Product 
							<input  value={this.state.name} onChange={this.onChangeName} className='form-control' />
						</label>
						<button onClick={this.createProduct} className="btn btn-primary"> Add </button>
					</div>
				</form>	
			</div>

		)

	}
}
