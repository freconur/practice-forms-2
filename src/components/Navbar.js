import React from 'react';
import Logo from '../images/freconur.png';
import './styles/Navbar.css'
class Navbar extends React.Component {
	render(){
		return (
			<React.Fragment>
				<div className="Navbar">
				<img  className="Navbar__logo" src={Logo} />
				</div>
			</React.Fragment>	
		)
	}
}

export default Navbar;