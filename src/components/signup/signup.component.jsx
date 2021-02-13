import React, { useState } from 'react'

import "./signup.styles.css"
import CustomButton from "../custom-button/custom-button.component"
import FormInput from "../form-input/form-input.component"
import Heading from "../Heading/heading.component"
import API from "../../API"

export default function SignUp() {
    const [signupForm, setSignUpForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleSubmit = async event => {
        event.preventDefault();

        const { fullName, email, password,confirmPassword } = signupForm;

        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }

        const dataToSend = { fullName, email, password }

        try {
            // const { user } = await auth.createUserWithEmailAndPassword(email, password);
            // await createUserProfileDocument(user, {displayName});
            fetch(`${API}/signup`,{
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataToSend)
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))

            setSignUpForm({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        } catch (error) {
            console.log(error);
        }

    }

    const handleChange = event => {
        const { name, value } = event.target;
        setSignUpForm({ ...signupForm, [name]: value})
    } 

    const { fullName, email, password,confirmPassword } = signupForm;
    return (
        <div>
            <div className="heading-container-in-login">
                <Heading title="I don't have an account" display="display-5" h1="heading-in-login-form" />
                <p className='my-3'>Sign Up with your email and password</p>
            </div>
            <form className="mt-5" onSubmit={handleSubmit}>
                <FormInput name="fullName" type="text" handleChange={handleChange} value={fullName} placeholder="Full Name" />
                <FormInput name="email" type="email" handleChange={handleChange} value={email} placeholder="Email" />
                <FormInput name="password" type="password" handleChange={handleChange} value={password} placeholder="Password" />
                <FormInput name="confirmPassword" type="password" handleChange={handleChange} value={confirmPassword} placeholder="Confirm Password" />
                <div className="text-center">
                    <CustomButton title="SignUp" button="login-button" />
                </div>
            </form>
        </div>
    )
}
