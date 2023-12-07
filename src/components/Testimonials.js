import React from 'react'
import './Testimonials.css'
import logo from "../assets/Logo.svg"
import { testimonials } from '../config/testimonialsCfg'
import TestimonialsCard from './TestimonialsCard'

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className='heading'>Testimonials</div>
            <div className='content'>
                <div className="logo"> <img src={logo} alt="logo" /> </div>
                <div className="testimonialsContent">
                    <div className='track'>
                        {testimonials.map((item) => {
                            return <TestimonialsCard data={item} key={item.name} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
