import React from 'react'
import './Home.css'
import Signup from './Signup'
import Landing from './Landing'

const Home = () => {
    return (
        <div className='container'>
            {/* <div id="bluela"></div> */}
            <div><Landing /></div>
            <div><Signup /></div>
        </div>
    )
}

export default Home
