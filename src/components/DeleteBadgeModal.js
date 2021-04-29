import React from 'react';
import Modal from './Modal';

function DeleteBadgeModal (props) {
    return (
			<Modal isOpen={props.isOpen} onClose={props.onClose}>
				<h1>Estas seguro?</h1>
				<p>Borraras el badge permanentemente</p>
				<button className="btn btn-danger" onClick={props.onDeleteBadge}>Delete</button>
				<button className="btn btn-primary" onClick={props.onClose}>Cancel</button>
			</Modal>
		)
}

export default DeleteBadgeModal;