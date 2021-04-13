import React from 'react';
import Hero from '../components/Hero';
import './styles/Badges.css';
import Badgeslist from '../components/Badgeslist';
import { Link } from 'react-router-dom';
import api from '../api';
class Badges extends React.Component {

	state = {
    loading: true,
    error: null,
    data: undefined,
	};

  componentDidMount () {
		this.fetchData()
	}

	fetchData = async () => {
		this.setState({ loading:true, error: null })
		
		try {
			const data = await api.badges.list();
			this.setState({ loading: false, data: data });
		}	catch (error){
			this.setState({ loading: false, error: error });
		}
	};

	render() {
    if (this.state.loading === true) {
      return 'loading...';
    }
	 if (this.state.error) {
	 	return `Error: ${this.state.error.message}`;
	 }
		return (
			<React.Fragment>
				<Hero />
					<div className="Badges__container">
						<div className="Badges__buttons">
							<Link to="/badges/new" className="btn btn-primary">
								New Badge
							</Link>
						</div>
							<div className="Badges__list">
								<div className="Badgeslist__container">
									
									<Badgeslist 
									badges={this.state.data} />
									
								</div>
							</div>
					</div>
				
			</React.Fragment>
		);
	}
}
export default Badges;