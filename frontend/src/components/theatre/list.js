import {ListGroup, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {listTheatre} from '../../redux/actions/theatre'
import {useState, useEffect} from 'react'


function List(props) {
    const [theatre, settheatre] = useState([])

	useEffect(() => {
		props.listTheatre(props?.movie)
	},[])

	useEffect(() => {
		settheatre(props.theatres)
		console.log(props)
	}, [props])
    return (
        <ListGroup>
        {
            theatre ? 
            theatre.map(item => (
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">{item.name}</div>
                    {item.address}
                    </div>
                    <Button onClick={() => props.selectTheatre(item.id)}>See Shows</Button>
                </ListGroup.Item>
            ))
            : "No available theatre found for this movie"
        }
        </ListGroup>
    )
}

const mapState = state => {
    return {
        theatres: state.theatre.theatres
    }
}

export default connect(mapState, {listTheatre})(List)
