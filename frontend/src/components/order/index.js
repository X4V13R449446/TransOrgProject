import React from 'react'
import {Modal} from 'react-bootstrap'
import Form from './form'

function OrderForm(props) {
    return (
        <Modal {...props}  >
            <Modal.Header closeButton>
                <Modal.Title>Select Order Timing</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form movieId={props?.movieId} theatreId={props?.theatreId} />
            </Modal.Body>
        </Modal>
    )
}

export default OrderForm