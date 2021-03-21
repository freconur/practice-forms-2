import React from 'react';
import Logo from '../images/freconur.png';
import './styles/Navbar.css'
class Navbar extends React.Component {
	render(){
		return (
			<div>
				<div className="Navbar">
				<img  className="Navbar__logo" src={Logo} />
				</div>
			</div>	
		)
	}
}

export default Navbar;