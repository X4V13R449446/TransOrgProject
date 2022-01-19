import React, {useEffect} from 'react'
import {logoutUser} from '../../redux/actions/auth'
import {connect} from 'react-redux'
import {Navigate} from 'react-router-dom'

function Logout(props) {
    useEffect(()=>{
        props.logoutUser()
    },[])
    
    return (
        <Navigate to="/login" />
    )
}

export default connect(null, {logoutUser})(Logout)
