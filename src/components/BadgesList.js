import React from 'react';

class BadgesList extends React.Component {
    render (){
        return (
            <div className="Badges__container">
					<ul className="list-unstyled">
						{this.props.badges.map(badge => {
							return (
								<li key={badge.id}>
									<p> {badge.firstName} {badge.lastName} </p>
								</li>
							)	
						})}
					</ul>	
				</div>
        )
    }
} 

export default BadgesList;