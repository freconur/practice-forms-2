import React from 'react' ;

class BadgesForm extends  React.Component {
		/* state={}

		handleChange = e => {
			this.setState({
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
								value={this.props.formValues.firsName}
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
						</form>
				</div>
			)
		}
}
export default BadgesForm;