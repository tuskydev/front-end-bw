import React, { useState, useEffect } from 'react'
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from 'react-redux';
import { deletePost } from "../store/actions/issueActions";
import jwt from 'jsonwebtoken';

const UserIssuesCard = props => {
    const [editData, setEditData] = useState({})
    const [issue, setIssue] = useState({})

    useEffect(() => {
        props.issues && setEditData({
            Title: props.issues.title,
            Post: props.issues.post
        })
    }, [])

    const handleChange = e => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value
        })
    }

    return (
    <div className={"issuescard-container"}>
        {props.issues && props.issues.map(item => {
                return(
                <div key={item.id} className={"issuescard userCard"}>
                    
                    <h2>{item.title}</h2>
                    <h3>{item.post}</h3>
                    <h3>{item.zip_code}</h3>
                    <AiFillDelete className={"deleteUsersCard"} onClick={() => {props.deletePost(props.issues, item.id)}}/>
                </div>
                )
            })}
    </div>
    )
}

export default connect(null , { deletePost })(UserIssuesCard)
