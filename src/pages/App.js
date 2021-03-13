import React from 'react';
import Badge from '../components/Badge';
import BadgesForm from '../components/BadgesForm';
import './styles/App.css'
class App extends React.Component {
	state= { form: {
		firstName:'',
		lastName:'',
		email:'',
	}}

	handleChange = e => {
		this.setState ({
			//queremos que el form tenga la informacion del evento que acaba de ocurrir
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			}
		})
	}
    render() {
        return (
            <div className="container">
                <div className="Badge__container">
                    <Badge 
                    firstName={this.state.form.firstName } //|| Name
										lastName={this.state.form.lastName } //|| Last Name
										email={this.state.form.email } //|| email
                    />
                    </div>
                <div className="BadgeForm__container">
									<BadgesForm 
									onChange={this.handleChange}
									formValues={this.state.form}
									/>
									</div>
            </div>
        )
    }
}
export default App;