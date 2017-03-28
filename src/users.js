import React from 'react';


export default class Users extends React.Component {
	render(){
		return(
			<div className="container">
				<h1> Users </h1> 
				<ul className='list-group'>
					{
						this.props.users.map((user)=> {
							return (
								<li key={user.id} className='list-group-item'>{user.name} </li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}