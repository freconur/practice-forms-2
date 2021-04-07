import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar'
import './styles/Badgeslist.css'

class Badgeslist extends React.Component{
	render() {
		//para en caso no se haya creado un badge se procedera enviar un mensaje donde no existe badge y se sugerira crear uno nuevo.
		if (this.props.badges.length === 0) {
			return (
				<div>
					<h3>No were badge found</h3>
					<Link to="/badges/new" className="btn btn-primary">
						create new Badge
					</Link>
				</div>
			)
		}
		return (
			
				<ul className="list-unstyled">
					{this.props.badges.map((badge) => {
						return(
							<li className="Badges__list" key={badge.id}>
								<Link className="text-reset text-decoration-none"  
									to={`/badges/${badge.id}/edit`}>
									<p className="Badges__datos">
										{badge.firstName} {badge.lastName}
									</p>
									<Gravatar email={badge.email}/>
								</Link>
							</li>
						);
					})}
				</ul>
			
		);
	}
}

export default Badgeslist;