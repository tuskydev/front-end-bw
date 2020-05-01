import React, { useState, useEffect } from 'react';
import "./styles/NavBar.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FaUserAlt } from "react-icons/fa";
import { useHistory, useParams, Link } from 'react-router-dom';
import { fetchUser } from '../store/actions/userActions'
import { connect } from 'react-redux'
import jwt from 'jsonwebtoken'


const ProtectedNavBar = props => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { push } = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token')
        const userInfo = jwt.decode(token)
        props.fetchUser(userInfo.userId)
        // console.log(userInfo)
    }, [])

    const toggle = () => setDropdownOpen(!dropdownOpen);

    const pushToProfile = e => {
        push(`/profile/${props.user.username}`)
    }

    const pushToUsersIssues = e => {
        push(`/your-posts/${props.user.username}`)
    }

    const logout = e => {
        localStorage.removeItem('token')
        push("/login")
    }

    return (
        <div className={"bigDiv"}>
            <Link to="/issues"><h1 className={"headerTitle"}>Co-Make</h1></Link>

            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle style={{backgroundColor: "maroon"}} caret>
                    <FaUserAlt />{" "}
                    </DropdownToggle>
                <DropdownMenu style={{left: "-100px"}} className={"dropDownBackgroundColor"}>
                    <DropdownItem className={"dropDownColor"} onClick={pushToProfile}>Profile</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className={"dropDownColor"} onClick={pushToUsersIssues}>Your posts</DropdownItem>
                    <DropdownItem divider />
                    <a href="https://github.com/BW-Co-Make" style={{textDecoration: "none"}} target="_blank"><DropdownItem className={"dropDownColor"} >Github</DropdownItem></a>
                    <DropdownItem divider />
                    <a href="https://frosty-bhaskara-b72a89.netlify.app/about.html" style={{textDecoration: "none"}} target="_blank"><DropdownItem className={"dropDownColor"}>About</DropdownItem></a>
                    <DropdownItem divider />
                    <DropdownItem className={"dropDownColor"} onClick={logout}>Logout</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        isFetching: state.user.isFetching
    }
}

export default connect(mapStateToProps, { fetchUser })(ProtectedNavBar)