import React, {useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import moment from 'moment'
import {connect} from 'react-redux'
import {getOrder} from '../../redux/actions/order'


function OrderComplete(props) {
	const {orderId} = useParams()

	useEffect(() => {
		props.getOrder(orderId)
	},[orderId])


    return (
        <Container>
		<Row style={{height:100}}>
			<Col md={4}></Col>
		</Row>
		<Row>
			<Col md={{ span: 4, offset: 4}}>
            Order is completed
			</Col>
			<Col md={{ span: 4, offset: 4}}>
			Order Date: {moment(props?.order?.created_on).format("DD-MM-YYYY  h:mm a")}
			</Col>
			<Col md={{ span: 4, offset: 4}}>
			Seats : {props?.order?.seat}
			</Col>			
		</Row>
		</Container>
    )
}

const mapStateToProps = state => {
	return {
		order: state.order.detailed
	}
}

export default connect(mapStateToProps, {getOrder})(OrderComplete)