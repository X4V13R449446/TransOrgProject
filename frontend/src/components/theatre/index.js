import React, {useEffect} from 'react'
import {Modal} from 'react-bootstrap'
import TheatreList from './list'

function TheatreModal({show, onHide, ...formProps}) {
    console.log('Theatre modal initialized')
    useEffect(() => {
        console.log({show, onHide, ...formProps})
        console.log("show is ", show)
    })
    return (
        <Modal show={show}  onHide={onHide} >
            <Modal.Header closeButton>
                <Modal.Title>Select Theatre</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <TheatreList {...formProps} />
            </Modal.Body>
        </Modal>
    )
}

export default TheatreModal
