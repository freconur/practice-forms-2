import React from 'react';
import Modal from './Modal';
function DeleteBadgeModal (props) {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <h1>Estas seguro?</h1>
            <p>estas apunto de eliminar este badge permanentemente</p>
						<button onClick={props.deleteBadgeModal} className="btn btn-danger mr-4" >Eliminar</button>
						<button onClick={props.onClose} className="btn btn-primary" >Cancelar</button>
        </Modal>
    )
}

export default DeleteBadgeModal;