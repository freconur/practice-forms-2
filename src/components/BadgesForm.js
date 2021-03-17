import React from 'react' ;

class BadgesForm extends  React.Component {
	/* handleChange = e => {
		this.setState ({
			[e.target.name]: e.target.value,
		})
	} */
    render() {
			return (
				<div>
					<form>
							<div>
								<label>First Name</label> <br />
								<input 
								type="text" 
								name="firstName"
								onChange={this.props.onChange}
								value={this.props.formValues.firstName}
								/>
								</div>
							<div>
								<label>Last Name</label><br />
								<input 
								type="text" 
								name="lastName"
								onChange={this.props.onChange}
								value={this.props.formValues.lastName}
								/>
							</div>
							<div>
								<label>Email</label><br />
								<input 
								type="email" 
								name="email"
								onChange={this.props.onChange}
								value={this.props.formValues.email}
								/>
							</div>
						</form>
				</div>
			)
		}
}
export default BadgesForm;