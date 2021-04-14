import React from 'react';
import api from '../api';
import './styles/BadgeDetails.css'
import Badge from '../components/Badge'
import { Link } from 'react-router-dom'

class BadgeDetails extends React.Component {
	state = { 
		loading: true,
		error: null,
		data: undefined,
	}

	componentDidMount () {
		this.fetchData()
	}

	fetchData = async () => {
		this.setState({ loading: true, error:null })

		try {
			const data = await api.badges.read(
				this.props.match.params.badgeId
				);
				
			this.setState({ loading: false, data: data })
		} catch (error) {
			this.setState({  loading:false, error: error })
		}
	
	}

    render () {
			if(this.state.loading) {
				return 'Loading...'
			}

			const badge = this.state.data;
        return (
					<React.Fragment>
						<div className="BadgeDetails__hero">
							<h2> bienvenido {badge.firstName} </h2>
						</div>
						<div className="row BadgeDetails__container">
							<div className="BadgeDetails__container-badge col-6">
								<Badge
								firstName={badge.firstName}
								lastName={badge.lastName}
								email={badge.email}
								jobs={badge.jobTitle}
								/>
							</div>
							<div className="BadgeDetails__container-buttons col-6">
								<div>
							<Link className="btn btn-primary mb-3"  to={`/badges/${badge.id}/edit`}>Edit</Link>
									
								</div>

							<div>

							<button className="btn btn-danger">Delete</button>
							</div>
								
							</div>
						</div>
						
					</React.Fragment>
					)
    }
}

export default BadgeDetails;