import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { findAllByTestId } from '@testing-library/dom';
import './styles/Badges.css';
import Badgeslist from '../components/Badgeslist';
import { Link } from 'react-router-dom';
import api from '../api'
class Badges extends React.Component {

	state = {
		loading: true,
		error: null,
		data: undefined,
	}

	componentDidMount(){
		this.fetchData()
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null })
		try {
			const data = await api.badges.list();
			this.setState({ loading: true, data: data })
		} catch ( error ) {
			this.setState({ loading: false, error: error })
		}
	}

	render() {
		return (
			<React.Fragment>
				<Hero />
					<div className="Badges__container">
						<div className="Badges__buttons">
							<Link to="/badges/new" className="btn btn-primary">New Badge</Link>
						</div>
						<div>
							<div className="Badges__list">
								<div className="Badgeslist__container">
									<Badgeslist 
									badges={this.state.data}
									/>

								</div>
							</div>
						</div>
					</div>
				
			</React.Fragment>
		)
	}
}
export default Badges;