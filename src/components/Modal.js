import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default (props) => {
    return(
        <div className="static-modal">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>{props.text}</Modal.Body>

                <Modal.Footer>
                    <Button onClick={props.onCancel}>Close</Button>
                    <Button bsStyle="primary" onClick={props.onSubmit}>Confirm</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}
