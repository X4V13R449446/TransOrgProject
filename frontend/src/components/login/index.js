import {Form, Button} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {addUser, loginUser} from '../../redux/actions/auth'
import {connect} from 'react-redux'
import Layout from './layout'


const SignUpForm = (props) => {

	const navigate = useNavigate()

	const [formData, setformData] = useState({})
	const [errors, seterrors] = useState({})

	useEffect(() => {
		console.log(props.user)
		if(props.user){
			console.log('User done')
			navigate("/home")
		}
	},[props.user])

	const setFormData = (e) => {
		setformData({...formData,
			[e.target.name]: e.target.value
		})
	}

	const setErrors = (err) => {
		if (err?.response){
			seterrors({
				...errors,
				...err.response.data
			})
		}
	}

	const submitForm = (e) => {
		e.preventDefault()
		props.loginUser(formData, setErrors)
	}

	return (
		<Layout>
			<Form onSubmit={submitForm}>
			<Form.Group className="mb-3">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" value={formData.email} name="email" onChange={setFormData} />
				{
					errors?.email ? errors.email.map(msg => <Form.Text style={{color: "red"}}>
					{msg}
					</Form.Text>) : null
				}
			
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={setFormData} />
			</Form.Group>
			<Button variant="primary" type="submit">
				Login
			</Button>  Or <Link to="/signup">Sign up</Link>
			</Form>
		</Layout>
	)
}

const mapState = state => {
	return {
		user: state.auth.user
	}
}


export default connect(mapState, {addUser, loginUser})(SignUpForm)
