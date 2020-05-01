import React from 'react'
import * as yup from "yup"
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { addNewUser } from "../store/actions/userActions";
import { useForm } from "react-hook-form"

const schema = yup.object().shape({
      first_name: yup.string().required("First Name is required").min(2, "Must be at least 2 characters"),
      last_name: yup.string().required("Last Name is required").min(2, "Must be at least 2 characters"),
      password: yup.string().min(6, "Password must be at least 6 characters long").required("Password is required"),
      zip_code: yup.string().min(5, "Zip Code must be at least 5 characters long").required("Zip Code is required"),
      username: yup.string().required("Username is required").min(2, "Must be at least 2 characters")
    });

const SignUpForm = (props) => {
  const { push } = useHistory();  
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  })

const onSubmit = data => {
  props.addNewUser(data)
  push("/login")
}

  return (
    <div className="form-container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstname">
            <input 
              placeholder="First Name*"
              type="text"
              name="first_name"
              ref={register}
            />
            {errors.firstname && <p className="error">{errors.firstname.message}</p>}
          </label>
          <label htmlFor="lastname">
            <input 
            placeholder="Last name*"
            type="text"
            name="last_name"
            ref={register}
            />
            {errors.lastname && <p className="error">{errors.lastname.message}</p>}
          </label>
          <label htmlFor="username">
            <input 
              placeholder="Username*"
              type="text"
              name="username"
              ref={register}
            />
            {errors.username && <p className="error">{errors.username.message}</p>}
          </label>
          <label htmlFor="password">
            <input 
              placeholder="Password*"
              type="text"
              name="password"
              ref={register}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </label> 
          <label htmlFor="zipcode">
            <input 
            placeholder="Zipcode*"
            type="text"
            name="zip_code"
            minLength="5"
            ref={register}
            />
            {errors.location && <p className="error">{errors.location.message}</p>}
          </label>
          <button>Sign Up</button>
        </form>
      </div>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  )
}

export default connect(null, { addNewUser })(SignUpForm)