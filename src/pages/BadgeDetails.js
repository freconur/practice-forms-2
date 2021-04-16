import React from 'react';
import api from '../api';
import Badge from '../components/Badge'
import freconur from '../images/freconur.png'
import { Link } from 'react-router-dom'
import './styles/BadgeDetails.css'
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
		this.setState({ loading: true, error:null });

		try {
			const data = await api.badges.read(
				this.props.match.params.badgeId
			)

			this.setState({ loading: false, data:data })
		}catch(error) {
			this.setState({ loading:false, error: error }) 
		}
	}
	render () {

		if( this.state.loading ) {
			return 'loading...'
		}
		const badge = this.state.data;
		return (
			<div>
			<div className="row BadgeDetails__container">
				<div className="col-6">
					<img src={freconur} className="BadgeDetails__logo" />
				</div>
				<div className="col-6">
					<h1>bienvenido {badge.firstName}</h1>
				</div>
			</div>

				<div className="row">
					<div className="col-6">
						<Badge 
						firstName={badge.firstName}
						lastName={badge.lastName}
						email={badge.email}
						jobs={badge.jobTitle}
						/>
					</div>
					<div className="col-6">
						<Link to={`/badges/${badge.id}/edit`}  className="btn btn-primary">EDIT</Link>
						<div className="btn btn-danger"> DELETE </div>
					</div> 	
				
				</div>

			</div>
		)
	}
}

export default BadgeDetails;