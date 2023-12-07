import React from 'react'
import './CarouselComponent.css'
import bell from '../assets/bell.svg'
import bar_chart from '../assets/bar-chart-2.svg'
import clock from '../assets/clock.svg'

const CarouselComponent = () => {
    return (
        <div className='flex carousel'>
            <div className='card card1'>
                <div className='flex space-between'>
                    <div><img src={bell} alt="bellIcon" /> </div>
                    <button id='save' onClick={() => console.log('saved click')}>Save</button>
                </div>
                <div id='subHead'>We'll be sending notifications to you here</div>
                <div><input type="text" placeholder='hello@gmail.com' id='email_input2' /></div>
            </div>
            <div className='card card2'>
                <div className='flex space-between'>
                    <div><img src={bar_chart} alt="barChartIcon" /> </div>
                    <button id='save'>Save</button>
                </div>
                <div id='subHead2'>Notify me when any wallets move more than</div>
                <div><select>
                    <option>$1000.00</option>
                </select></div>
            </div>
            <div className='card card2'>
                <div className='flex space-between'>
                    <div><img src={clock} alt="clockIcon" /> </div>
                    <button id='save'>Save</button>
                </div>
                <div id='subHead3'>Notify me when any wallet dormant for</div>
                <div className='dropdown'><select>
                    <option>&gt;30 days</option>
                </select></div>
                <div id='subHead4'>becomes active</div>
            </div>
        </div>
    )
}

export default CarouselComponent
