import React from 'react';
import Badge from '../components/Badge';
import BadgesForm from '../components/BadgesForm';
import Navbar from '../components/Navbar';
import './styles/BadgeNew.css'
import Hero from '../components/Hero'
class BadgeNew extends React.Component {
    render() {
        return (
					<div>
						<Navbar />
						<Hero />
						<div className="container">
									<div className="Badge__container">
											<Badge 
											firstName={this.props.firstName || 'Nombre'}
											lastName="mondongito"
											email="freconur@gmail.com"
											/>
											</div>
									<div className="BadgeForm__container">
										<BadgesForm />
									</div>
							</div>
					</div>
        )
    }
}
export default BadgeNew;