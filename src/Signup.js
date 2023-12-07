import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const isValidEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const handleGetStarted = () => {
        if (isValidEmail(email)) {
            window.open('https://app.loch.one/welcome', '_blank');
        } else {
            alert("Enter a valid email!")
        }
    }


    return (
        <div className='signup'>
            <div className="header">Sign up for exclusive access.</div>
            <div className="emailInput"><input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='Your email address' id='email_input' /></div>
            <div className="getStarted"><button id='primaryBtn' onClick={() => handleGetStarted()}>Get started</button></div>
            <div className="label"><p id='label'>You'll receive an email with an invite link to join.</p></div>
        </div>
    )
}

export default Signup