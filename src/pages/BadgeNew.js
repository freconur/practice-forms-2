import React from 'react';
import Badge from '../components/Badge';
import BadgesForm from '../components/BadgesForm';
import Navbar from '../components/Navbar';
import './styles/BadgeNew.css'
import Hero from '../components/Hero'
import api from '../api';
class BadgeNew extends React.Component {

	state = { form: {
		firstName:'',
		lastName:'',
		email:'',
	}}

		handleChange = e => {

			this.setState ({
				form: {
					...this.state.form,
					[e.target.name] : e.target.value,
				}
			});
		}

		handleSubmit = async e => {
			e.preventDefault()
			this.setState({loading: true, error: null})
			try {
				await api.badges.create(this.state.form)
				this.setState({loading: false })
			} catch (error){
				this.setState({loading: false, error: error})
			}
		}
    render() {
			return (
				<React.Fragment>
					<Hero />
					<div className="container">
						<div className="Badge__container">
							<Badge 
							firstName={this.state.form.firstName || 'Nombres'}
							lastName={this.state.form.lastName || 'Apellidos'}
							email={this.state.form.email || 'email'}
							/>
						</div>
						<div className="BadgeForm__container">
							<BadgesForm 
							onChange={this.handleChange}
							formValues={this.state.form}
							onSubmit={this.handleSubmit}
							/>
						</div>
						</div>
				</React.Fragment>
			)
    }
}
export default BadgeNew;