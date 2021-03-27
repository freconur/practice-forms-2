import React from 'react';
import Logo from '../images/freconur.png';
import './styles/Navbar.css'
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
	render(){
		return (
			<React.Fragment>
				<div className="Navbar">
				<Link className="Navbar__container" to="/">
				<img  className="Navbar__logo" src={Logo} />
				</Link>
				</div>
			</React.Fragment>	
		)
	}
}

export default Navbar;