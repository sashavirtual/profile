import React from 'react'
import './heading.css'
const Heading = ({ title }) => {
    return (
        <div className='heading'>
            <span>{title}</span>
        </div>
    )
}

export default Heading