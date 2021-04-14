import React from 'react';
import Badge from '../components/Badge';
import BadgesForm from '../components/BadgesForm';
import './styles/BadgeNew.css'
import Hero from '../components/Hero'
import api from '../api';
class BadgeEdit extends React.Component {

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

		componentDidMount (){
			this.fetchData()
		}

		fetchData =  async () => {
			
			const data = await api.badges.read(
				this.props.match.params.badgeId
			);

			this.setState ({ loading: true, error: null })
				try{
					this.setState({ loading:false, form:data });
				}catch(error) {
					this.setState({ loading:false, error:error })
				}
		}

		handleSubmit = async e => {
			e.preventDefault()
			this.setState({loading: true, error: null})
			try {
				await api.badges.update(this.props.match.params.badgeId, this.state.form)
				this.setState({loading: false })
				this.props.history.push('/badges');
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
				);
    }
}

export default BadgeEdit;