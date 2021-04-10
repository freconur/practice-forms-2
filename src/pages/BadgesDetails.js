import React from 'react';
import api from '../api';
import '../components/styles/Hero.css';
import Badge from '../components/Badge';
import { Link } from 'react-router-dom';

class BadgesDetails extends React.Component {

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
		render(){
			if(this.state.loading) {
				return 'Loading...'
			}

			const badge = this.state.data;
			return (
				<React.Fragment>
					<div className="BadgeNew__hero">
						<div className="BadgeNew__overlay"></div>
							<div className="row">
								<div className="col-6">
									<h1>Bienbenido</h1>
								</div>
								<div className="col-6">
									<h2 className="BadgeNew__title">{badge.firstName} {badge.lastName}</h2>
								</div>
						</div>
					</div>
				
					<div className="row">
						<div className="col-6">
							<Badge 
							firstName={badge.firstName}
							email={badge.email}
							lastName={badge.lastName}
							jobs={badge.jobTitle}
							/>
						</div>
						<div className="col-6">
							<h2>Actions</h2>
							<div >
								<Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
								Edit
								</Link>
							</div>
							<div >
								<button className="btn btn-danger">
								Delete
								</button>
							</div>
						</div>
					</div>
				</React.Fragment>
			);
		}
	}


export default BadgesDetails;
