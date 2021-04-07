import React from 'react';
import Gravatar from './Gravatar';
class Badge extends React.Component {
    render() {
        return (  
					<div>
						<Gravatar 
						className="Bage__images" 
						alt="avatar"   
						email={this.props.email}
						/>
						<h1>{this.props.firstName} <br /> {this.props.lastName}</h1>
						<p>{this.props.jobs}</p>
						<p>@freconur</p>
						<p>{this.props.email}</p>
					</div>
        )
    }
}
export default Badge;

