import React from 'react'
import './TestimonialsCard.css'

const TestimonialsCard = ({ data }) => {
    return (
        <div className='testimonialCard'>
            <div className='flex1'>
                <div className='name'>{data.name}</div>
                <div className='occ'>{data.occupation}</div>
            </div>
            <div className='comment'>
                "{data.comment}"
            </div>
        </div>
    )
}

export default TestimonialsCard
