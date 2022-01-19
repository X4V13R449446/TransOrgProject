import {Form, Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import {listShows} from '../../redux/actions/show'
import {addOrder} from '../../redux/actions/order'
import {connect} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import moment from 'moment'



function OrderForm(props) {

    const [formData, setformData] = useState({show: null, seat:1})
    const [errors, seterrors] = useState({})

    const navigate = useNavigate()
    
    useEffect(() => {
        props.listShows(props?.movieId, props.theatreId)
    },[])

    useEffect(()=>{
        if(props.order){
            navigate(`/complete/${props.order.id}`)
        }
    },[props.order])

    const setErrors = (err) => {
		if (err?.response){
			seterrors({
				...errors,
				...err.response.data
			})
		}
	}

    const onChange = e => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const submitForm = e => {
        e.preventDefault()
        props.addOrder(formData).catch(err=> {
            if (err?.response){
                setErrors(err)
            }
        })
    }


    return (
        <Form onSubmit={submitForm}>

        <Form.Group className="mb-3">
            <Form.Label>Seats </Form.Label>
            <Form.Control type="number" placeholder="Seats You want" name="seat" value={formData.seat} onChange={onChange} />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Select Show Timing</Form.Label>
            <Form.Select placeholder="Select" value={formData.show} name="show" onChange={onChange} >
            <option value={null}>Select</option>
            {
                props.shows.map(show => {
                    let show_start = moment(show.date)
                    let end_time = moment(show.end_time, "HH:mm")
                    return <option value={show.id} disabled={show.total_available_seats <= 0}>{show_start.format("DD-MM")} {show_start.format("h:mm a")} to {end_time.format("h:mm a")} {show.total_available_seats} seats</option>
                })
            }
            </Form.Select>
            {
                errors?.show ? errors.show.map(msg => <Form.Text style={{color: "red"}}>
                {msg}
                </Form.Text>) : null
            }
        
        </Form.Group>

        <Button variant="primary" type="submit">
            Place Order
        </Button>
        </Form>
    )
}

const mapStateToProps = state => {
    return {
        shows : state.show.shows,
        order: state.order.detailed
    }
}

export default connect(mapStateToProps, {addOrder, listShows})(OrderForm)
