
import React from 'react'
import './Service.css'
import service from '../../Assets/Service Agreement.pdf'

function Service() {
    return (
        <div className='container'>
            <div className="content " id="specs-content">
                <h1 className='service-title'>Service Agreement</h1>
                <p className='service-info'>Click the links below to view or download our Service Agreement</p>
                <div className="service-links">
                    <a className='service-link' href={service} target='_blank' rel="noopener noreferrer">View</a>
                    <a className='service-link' href={service} download>Download</a>
                </div>
            </div>
        </div>
    )
}

export default Service