import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from "../utils/axiosWithAuth";
import UserIssuesCard from "./UserIssuesCard";
import ProtectedNavBar from "./ProtectedNavBar";
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import { addPost, renderUserPosts } from "../store/actions/issueActions";

// to-dos:
// form at the top
//  posts posted recently
//  use css from IssuesPage.js
//  setData from user's current posts to re-render current posts
//  add edit feature
//  delete posts feature
//  (if backend success; add ticker)

// .GET URL: /api/users/:id/issues
// post URL: /api/issues

const UsersIssuesPage = props => {
    const [userFormData, setUserFormData] = useState({
        title: "hey from body",
        body: ""
    })

    useEffect(() => {
        const token = localStorage.getItem('token')
        const userInfo = jwt.decode(token)
        props.renderUserPosts(userInfo.userId)
    }, [])
    
    const handleChange = e => {
        setUserFormData({
            ...userFormData,
            [e.target.name]: e.target.value
        })
    }
    


    const handleSubmit = e => {
        const { title, body } = userFormData;
        e.preventDefault();
        axiosWithAuth()
        .post('/api/issues', { Title:title , Post:body })
        .then(response => {
            props.addPost(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
    <>
        <ProtectedNavBar />
        <form onSubmit={handleSubmit} className={"issuesPageForm"}>
            <h2>Add a new post</h2>
            <label>
                <input 
                    name="title"
                    type="text"
                    placeholder="Post a new issue your community"
                    onChange={handleChange}
                    
                />
            </label><br/>

            <label>
                <textarea 
                    name="body"
                    placeholder="Describe your issue.."
                    onChange={handleChange}

                />
            </label><br/>

            <button>Submit</button>
        </form>
        <UserIssuesCard issues={props.issues} />
    </>
    )
}

const mapStateToProps = state => {
    return {
        issues: state.issues.issues,
        isFetching: false,
    }
}

export default connect(mapStateToProps, { addPost, renderUserPosts })(UsersIssuesPage)
