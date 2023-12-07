import React from 'react'
import './Cohorts.css'
import Cohorts1 from '../assets/Cohorts 1.jpg'
import eye from '../assets/Eye.svg'

const Cohorts = () => {
    return (
        <div className='cohorts'>
            <div className='imgContainer'>
                <img src={Cohorts1} alt="cohorts" />
            </div>
            <div className='panel'>
                <div><img src={eye} alt="eyeIcon" /></div>
                <div className='heading2'>Watch what the whales are doing</div>
                <div className='text'>All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</div>
            </div>
        </div>
    )
}

export default Cohorts