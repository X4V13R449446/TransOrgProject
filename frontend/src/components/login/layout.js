import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'


function Layout(props) {
    return (
        <Container>
		<Row style={{height:100}}>
			<Col md={4}></Col>
		</Row>
		<Row>
			<Col md={{ span: 4, offset: 4}}>
            {props.children}
			</Col>
		</Row>
		</Container>
    )
}

export default Layout
