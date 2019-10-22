
import React from 'react'
import './Bylaws.css'
import bylaws from '../../Assets/Hooper Irrigation Bylaws.pdf'
function Bylaws() {
    return (
        <div className='container'>
            <div className="content " id="bylaws-content">
                <h1 className='bylaws-title'>Bylaws</h1>
                <p className='bylaws-info'>Click the link to view or download the Hooper Irrigation Company Bylaws</p>
                <div className="bylaws-links">
                    <a className='bylaws-link' href={bylaws} target='_blank' rel="noopener noreferrer">View</a>
                    <a className='bylaws-link' href={bylaws} download>Download</a>
                </div>
            </div>
        </div>
    )
}

export default Bylaws