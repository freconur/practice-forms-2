import React from 'react';
import './styles/Home.css';
import { Link } from 'react-router-dom';
class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="Home__container">
					<div className="Home__overlay"></div>
					<div className="title-container">
						<h1 className="Home__title">Bienvenidos al Blog de Ciclismo y CiloTURISMO</h1>
						<div className="Button__container">
							<Link to="/badges/new">
								<p className="btn btn-primary">
									UNETE
								</p>	
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Home;