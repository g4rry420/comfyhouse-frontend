import React from 'react'

import "./login-and-signup.styles.css"
import LogIn from '../../components/login/login.component'
import SignUp from '../../components/signup/signup.component'

export default function LoginAndSignupPage({ location: { state } }) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-5">
                    <LogIn state={state} />
                </div>

                <div className="col-md-5 ml-5 signup-container-in-mainPage">
                    <SignUp />
                </div>
            </div>
        </div>
    )
}
