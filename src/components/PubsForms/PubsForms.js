import React from 'react'
import './PubsForms.css'
import directorApplication from '../../Assets/Director Application.pdf'
import directorCodeOfEthics from '../../Assets/Director Code of Ethics.pdf'
import specifications from '../../Assets/Hooper Irr Co Std Details.pdf'
import bylaws from '../../Assets/Hooper Irrigation Bylaws.pdf'
import service from '../../Assets/Service Agreement.pdf'
function Service() {
    return (
        <div className='container'>
            <div className="content " id='pf-content' >
                <h1 >​Publications & forms</h1>
                    <div className='pf-container'>

                        <h2 className='pf-subtitle'>Service agreement</h2>
                        <div className='pf-card'>
                        <a href={service} target='_blank' rel="noopener noreferrer">
                                <li>Service Agreement - pdf</li>
                            </a>
                        </div>

                        <h2 className='pf-subtitle'>Bylaws</h2>
                        <div className='pf-card'>
                        <a href={bylaws} target='_blank' rel="noopener noreferrer">
                                <li>Bylaws of Hooper Irrigation (pdf)</li>
                            </a>
                        </div>

                        <h2 className='pf-subtitle'>Specifications</h2>
                        <div className='pf-card'>
                            <a href={specifications} target='_blank' rel="noopener noreferrer">
                                <li>Pressure Irrigation Standards and Specifications (pdf)</li>
                            </a>
                               
                        </div>

                        <h2 className='pf-subtitle'>Become a director</h2>
                        <div className='pf-card'>
                            <a href={directorApplication} target='_blank' rel="noopener noreferrer">
                                <li>Director Application (pdf)</li>
                            </a>
                            <a href={directorCodeOfEthics} target='_blank' rel="noopener noreferrer">
                                 <li>Director Code of Ethics (pdf)</li>
                            </a>
                        </div>

                    </div>
            </div>
        </div>
    )
}

export default Service