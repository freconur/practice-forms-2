import React from 'react';
import Badge from '../components/Badge'
import '../components/styles/Hero.css';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

function BadgeDetails (props) {

	const badge = props.badge
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
							<Modal isOpen={true} > Hola, aqui debe de aparecer algun mensaje</Modal>
						</div>
					</div>
				</div>
</React.Fragment>
    )
}

export default BadgeDetails;