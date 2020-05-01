import { axiosWithAuth } from '../../utils/axiosWithAuth';
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken'

// Sign up action
export const addNewUser = newUser => {
    return () => {
        return axios
        .post("https://co-make-bw.herokuapp.com/api/auth/register", newUser)
        .then(response => {   
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
}

// Log In action
export const userLogin = (user, push) => {
    console.log("User Login Info:", user)
    return dispatch => {
        axiosWithAuth()
        .post("/api/auth/login", user)
        .then(res => {
            const token = res.data.token
            localStorage.setItem('token', token);
            dispatch({type: 'LOGIN_USER_SUCCESS' })
            push("/issues")
        })
        .catch(error => {
            dispatch({type: 'LOGIN_USER_FAIL', payload: error })
            console.log(error)
        })
    }
}

//fetching user action
export const fetchUser = (id) => {
    // console.log("Getting User Info...", id)
    return dispatch => {
        dispatch({type: 'FETCH_USER_START'})
        return axiosWithAuth()
        .get(`/api/users/${id}`)
        .then(res => {
            dispatch({type: 'FETCH_USER_SUCCESS', payload: res.data })
        })
        .catch(error => {
            dispatch({type: 'FETCH_USER_FAIL', payload: error })
            console.log(error)
        })
    }
}
