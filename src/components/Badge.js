import React from 'react';

class Badge extends React.Component {
    render() {
        return (
					<div>
						<h1>{this.props.firstName} <br /> {this.props.lastName}</h1>
						<p>@freconur</p>
						<p>{this.props.email}</p>
					</div>
        )
    }
}
export default Badge;
