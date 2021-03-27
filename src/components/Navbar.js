import React from 'react';
import Freconur from '../images/freconur.png'
import './styles/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
	return(
		
		<div className="Navbar">
			<div className="Navbar__logo-container">
				<Link to="/">
					<img className="Navbar__logo" src={Freconur}  />
				</Link>
			</div>
		</div>

		
	)
}

export default Navbar;