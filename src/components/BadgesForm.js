import React from 'react' ;

class BadgesForm extends  React.Component {
	handleClick = e => {
    console.log('Button was clicked');
  };
	
	//handleChange = e => {
	// 	this.setState ({
	// 		[e.target.name]: e.target.value,

	// 	})
	// };

		// handleSubmit = e => {
		// 	e.preventDefault();
		// 	console.log('form was submited');
		// 	console.log(this.state)
		// }

    render() {
			return (
				<div>
					<form onSubmit={this.props.onSubmit}>
						<div>
							<label>First Name</label> <br />
							<input 
							onChange={this.props.onChange}
							type="text" 
							name="firstName"
							//le pasamos un props adicion VALUE, es el que va tener y va desplegar cada uno de los inputs, lo que debemos hacer es leer la informacion desde el estado

							//para leer informacion dle estado se usa el "state", pero para escribirlo usamos "setState"
							value={this.props.formValues.firstName}
							/>
							</div>
						<div>
							<label>Last Name</label><br />
							<input 
							onChange={this.props.onChange}
							type="text" 
							name="lastName"
							value={this.props.formValues.lastName}
							/>
						</div>
						<div>
							<label>Email</label><br />
							<input 
							onChange={this.props.onChange}
							type="email" 
							name="email"
							value={this.props.formValues.email}
							/>
						</div>
						<button 
						onClick={this.handleClick} 
						className="btn btn-primary">Save
						</button> 
					</form>
				</div>
			)
		}
}
export default BadgesForm;