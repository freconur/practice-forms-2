import React from 'react' ;

class BadgesForm extends  React.Component {
    render() {
			return (
				<div>
					<form>
							<div>
								<label>First Name</label> <br />
								<input 
								type="text" 
								name="fisrtName"></input>
								</div>
							<div>
								<label>Last Name</label><br />
								<input 
								type="text" 
								name="lastName"></input>
							</div>
							<div>
								<label>Email</label><br />
								<input 
								type="email" 
								name="email"></input>
							</div>
						</form>
				</div>
			)
		}
}
export default BadgesForm;