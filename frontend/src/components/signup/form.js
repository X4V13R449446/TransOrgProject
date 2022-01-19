import {Form, Button} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import {addUser} from '../../redux/actions/auth'
import {connect} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


const SignUpForm = (props) => {

	const navigate = useNavigate()

	const [formData, setformData] = useState({})
	const [errors, seterrors] = useState({})

	useEffect(() => {
		if(props.user){
			console.log('User done')
			navigate("/home")
		}
	}, [props])


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
		props.addUser(formData).then(res=>{
			navigate("/login")
		}).catch(err=> {
			setErrors(err)
		})
	}

	return (
			<Form onSubmit={submitForm}>
			<Form.Group className="mb-3" >
				<Form.Label>First Name</Form.Label>
				<Form.Control type="text" placeholder="Your First Name" value={formData.first_name} name="first_name" onChange={setFormData} />
				{
					errors?.first_name ? errors.first_name.map(msg => <Form.Text style={{color:"red"}} >{msg}</Form.Text> ) : null
				}
			</Form.Group>

			<Form.Group className="mb-3" >
				<Form.Label>Last Name</Form.Label>
				<Form.Control type="text" placeholder="Your Last Name" value={formData.last_name} name="last_name" onChange={setFormData} />
				{
					errors?.last_name ? errors.last_name.map(msg => <Form.Text style={{color:"red"}} >{msg}</Form.Text> ) : null
				}
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" value={formData.email} name="email" onChange={setFormData} />
				{
					errors?.email ? errors.email.map(msg => <Form.Text style={{color: "red"}}>
					{msg}
					</Form.Text>) : null}
			
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={setFormData} />
			</Form.Group>
			<Button variant="primary" type="submit">
				Sign Up 
			</Button> or <Link to="/login"> Login </Link>
			
			</Form>
	)
}

const mapStateToProps = state => {
	return {
		user: state.auth.user,
	}
}

export default connect(mapStateToProps, {addUser, })(SignUpForm)
