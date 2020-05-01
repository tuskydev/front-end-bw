import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';

export const renderUserPosts = id => {
    // console.log("Getting User Posts...", id)
    return dispatch => {
        dispatch({type: "FETCH_POSTS_START"})
        return axiosWithAuth()
        .get(`/api/users/${id}/issues`)
        .then(response => {
            dispatch({type: "FETCH_POSTS_SUCCESS", payload: response.data.issues})
            // console.log("FETCH_POSTS_SUCCESS", response.data.issues)
        })
        .catch(error => {
            dispatch({type: "FETCH_POSTS_FAIL"})
            console.log("FETCH_POSTS_FAIL", error)
        })
    }
}

export const deletePost = (issues, postId) => {
    // console.log("DELETING User Posts...", issues)
    return dispatch => {
        return axiosWithAuth()
        .delete(`/api/issues/${postId}`)
        .then(() => {
            // Response is useless
            dispatch({type: "DELETE_POST_SUCCESS", payload: postId})
        })
        .catch(error => {
            console.log("DELETE_POSTS_FAIL", error)
        })
    }
}

export const addPost = newData => {
    // console.log("Getting NEWDATA!!!...", newData)
    return dispatch => {
        dispatch({type: "ADD_POSTS_SUCCESS", payload: newData})
    }
}

export const editPost = newData => {
    // console.log("Getting NEWDATA!!!...", newData)
    return dispatch => {
        dispatch({type: "ADD_POSTS_SUCCESS", payload: newData})
    }
}

