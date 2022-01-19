import {Route, Routes as Switch, Navigate} from 'react-router-dom'
import {useEffect} from 'react'

import SignUp from './components/signup'
import Login from './components/login'
import Logout from './components/login/logout'
import Home from './components/home'
import OrderComplete from './components/order/complete'
import { autoLogin } from './redux/actions/auth'
import { connect } from 'react-redux'


function Routes(props) {
    useEffect(() => {
        props.autoLogin()
    },[])
    return (
        <Switch>
        <Route element={<SignUp />} exact path="/signup" />
        <Route element={<Login />} exact path="/login" />
        <Route element={<OrderComplete />} exact path="/complete/:orderId" />
        <Route element={<Home />} exact path="/home" />
        <Route element={<Logout />} exact path="/logout" />
        <Route element={<Navigate replace to="/home" />} exact path="" />
        </Switch>
    )
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, {autoLogin})(Routes)

