import React from 'react';
import './styles/Modal.css'
import ReactDOM from 'react-dom'
function Modal (props) {
	if(!props.isOpen) {
		return null
	}
    return (
        ReactDOM.createPortal(
            <div className="Modal">
							<div className="Modal__container">
								<button onClick={props.onClose} className="btn">
									X
								</button>
								{props.children}
							</div>

						</div>,
						document.getElementById('Modal')

        )
    )
}
export default Modal;