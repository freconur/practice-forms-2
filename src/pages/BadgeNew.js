import React from 'react';
import Badge from '../components/Badge';
import BadgesForm from '../components/BadgesForm';
import './styles/BadgeNew.css'
import Hero from '../components/Hero'
class BadgeNew extends React.Component {
	
	state = { form: {
		firstName: "",
		lastName: "",
		email:"",
	}}

	handleChange = e => {
		this.setState ({
			form: {
				...this.state.form,
				[e.target.name] : e.target.value,
			}
		});
	}
    render() {
        return (
					<React.Fragment>
						<Hero />
						<div className="container">
									<div className="Badge__container">
											<Badge 
											firstName={this.state.form.firstName || 'Nombre'}
											lastName={this.state.form.lastName || 'Apellidos'}
											email={this.state.form.email || 'Email'}
											/>
											</div>
									<div className="BadgeForm__container">
										<BadgesForm 
										onChange={this.handleChange}
										formValues={this.state.form}
										/>
									</div>
							</div>
					</React.Fragment>
        )
    }
}
export default BadgeNew;