import React from 'react';
import Modal from './Modal';

function DeleteBadgeModal (props) {
    return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} >
			<div>
				<h2>Are you sure?</h2>
				<p>you are about to delete this badge</p>
				<div>
					<button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">
						delete
					</button>
					<button onClick={props.onClose} className="btn btn-primary">
						cancel
					</button>
				</div>
			</div>
		</Modal>
		);

}

export default DeleteBadgeModal;