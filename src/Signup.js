import React from 'react'
import './Signup.css'

const Signup = () => {
    return (
        <div className='signup'>
            <div className="header">Sign up for exclusive access.</div>
            <div className="emailInput"><input type="text" placeholder='Your email address' id='email_input' /></div>
            <div className="getStarted"><button id='primaryBtn' >Get started</button></div>
            <div className="label"><p id='label'>You'll receive an email with an invite link to join.</p></div>
        </div>
    )
}

export default Signup