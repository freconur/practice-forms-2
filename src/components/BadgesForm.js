import React from 'react' ;

class BadgesForm extends  React.Component {
	
	
		handleSubmit = e => {
			e.preventDefault();
			console.log('form was submited');
			console.log(this.state)
		}
    render() {
			return (
				<div>
					<form onSubmit={this.handleSubmit}>
							<div>
								<label>First Name</label> <br />
								<input 
								onChange={this.props.onChange}
								type="text" 
								name="firstName"
								//le pasamos un props adicion VALUE, es el que va tener y va desplegar cada uno de los inputs, lo que debemos hacer es leer la informacion desde el estado

								//para leer informacion dle estado se usa el "state", pero para escribirlo usamos "setState"
								value={this.props.formValues.fisrtName}

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
						<button onClick={this.handleSubmit} className="btn btn-primary">Save
						</button>
						</form>
				</div>
			)
		}
}
export default BadgesForm;