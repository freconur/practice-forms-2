import React from 'react';
import Badge from '../components/Badge';
import BadgesForm from '../components/BadgesForm';
import './styles/BadgesNew.css'
import Navbar from '../components/Navbar'

class BadgesNew extends React.Component {

	state = { form: {} };


	handleChange = e => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: [e.target.value]
			}
		})
	}
    render() {
        return (
					<React.Fragment>
            <div className="container">
                <div className="Badge__container">
                    <Badge 
                    firstName={this.state.form.firstName || 'NAME'}
										lastName={this.state.form.lastName || 'LAST NAME'}
										email={this.state.form.email || 'EMAIL'}
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
export default BadgesNew;