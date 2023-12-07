import React from 'react'
import './Notification.css'
import bell from '../assets/Bell2.svg'
import CarouselComponent from './CarouselComponent'

const Notification = () => {
    return (
        <div className='notification flex'>
            <div className='panel_1'>
                <div><img src={bell} alt="bellIcon" /></div>
                <div className='notifHead'>Get notified when a highly correlated whale makes a move</div>
                <div className='notifText'>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</div>
            </div>
            <div className='notifCarousel'>
                <CarouselComponent />
            </div>
        </div>
    )
}

export default Notification