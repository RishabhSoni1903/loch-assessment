import React from 'react'
import Testimonials from './components/Testimonials'
import Cohorts from './components/Cohorts'
import Notification from './components/Notification'
import './Landing.css'

const Landing = () => {
    return (
        <div className='landing'>
            <div id='bluela'></div>
            <Notification />
            <Cohorts />
            <Testimonials />
        </div>
    )
}

export default Landing