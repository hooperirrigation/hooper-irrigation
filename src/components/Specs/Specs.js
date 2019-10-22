
import React from 'react'
import './Specs.css'
import specifications from '../../Assets/Hooper Irr Co Std Details.pdf'

function Specs() {
    return (
        <div className='container'>
            <div className="content " id="specs-content">
                <h1 className='spec-title'>Specifications</h1>
                <p className='spec-info'>Click the link to view or download the Hooper Irrigation Company Standards and Specifications</p>
                <div className="spec-links">
                    <a className='spec-link' href={specifications} target='_blank' rel="noopener noreferrer">View</a>
                    <a className='spec-link' href={specifications} download>Download</a>
                </div>
            </div>
        </div>
    )
}

export default Specs