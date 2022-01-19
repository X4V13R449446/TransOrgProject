import {Navbar, Nav, Container, Card, Button, Row, Col} from 'react-bootstrap'
import {useNavigate, Link} from 'react-router-dom'
import { listMovies } from '../../redux/actions/movies'
import { autoLogin } from '../../redux/actions/auth'
import {connect} from 'react-redux'
import {useEffect, useState} from 'react'
import TheatreModal from '../theatre'
import OrderModal from '../order'

const Home = (props) => {
	const navigate = useNavigate()
	const [movies, setMovies] = useState([])
	const [selectedmovie, setselectedmovie] = useState(null)
	const [selectedTheatre, setSelectedTheatre] = useState(null)

	useEffect(() => {
		console.log('Home is here')
		props.listMovies()
	},[])


	useEffect(() => {
		setMovies(props.movies)
		if(props.user === null){
			console.log('Navigating from home to login')
			navigate("/login")
		}
	}, [props])

	return (
		<div>
		<Navbar style={{marginBottom:20}} bg="light" expand="lg">
		  <Container>
		    <Navbar.Brand href="#home">BookMyMovie</Navbar.Brand>
		    <Navbar.Toggle aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse id="basic-navbar-nav">
		      <Nav className="me-auto">
			  My Orders
		      </Nav>
			  <Link to="/logout"><Nav className="me-auto" >Logout</Nav></Link>
		    </Navbar.Collapse>
		  </Container>
		</Navbar>
		 <Container>
		 <Row md={{offset:1}} xs={1}>
		 {movies.map(movie => (
			<Col xs={1} md={{span:3, offset:1}} style={{marginTop:20}}>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
					<Card.Title>{movie.name}</Card.Title>
					<Card.Text>
						{movie.description}
					</Card.Text>
					<Button variant="primary" onClick={() => setselectedmovie(movie.id)}>View Theatres</Button>
					</Card.Body>
				</Card>
			</Col>
		 ))}
		 </Row>
		 </Container>
		 <TheatreModal show={selectedmovie} onHide={() => setselectedmovie(null)} movie={selectedmovie} selectTheatre={setSelectedTheatre} />
		 <OrderModal movieId={selectedmovie} theatreId={selectedTheatre} show={selectedTheatre} onHide={() => setSelectedTheatre(null)} />
		 </div>
	)
}

const mapState = state => {
	return {
		movies : state.movies.movies,
		user: state.auth.user
	}
}

export default connect(mapState, {listMovies, autoLogin})(Home)
