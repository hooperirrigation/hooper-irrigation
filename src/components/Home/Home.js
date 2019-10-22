import React from 'react'
import './Home.css'
import sprinklers from '../../Assets/sprinklers.jpeg'

function Home() {
    return (
        <div className='container'>
            <div className="content home-content">
                <h1>Welcome to Hooper Irrigation</h1>
                <div className="content-container">
                    <div className="home-text">
                        <p className='intro'>
                            Hooper Irrigation Company is a non-profit irrigation company providing Hooper City with secondary irrigation water. This website is intended to help you find the information you are looking for regarding your irrigation water.
                        </p>
                        <div className="contact">
                            <h2 id='contact-us'>
                                Contact Us
                            </h2>   
                            <h4 className='subheader'>Hours</h4>
                            <div className="hours">
                                <p className='left-align'>Monday - Friday</p>
                                <p className='left-align'>9AM - 4PM</p>
                            </div>
                            <div className="hours">
                                <p className='left-align'>Saturday - Sunday</p>
                                <p className='left-align'>Closed</p>
                            </div>
                            <h4 className="subheader">Address</h4>
                                <p className='left-align'>
                                    5375 S 5500 W, Hooper, UT 84315
                                </p>
                            <h4 className="subheader">Phone</h4>
                            <p className='left-align'>(801) 985-8429</p>
                        </div>

                    </div>

                    <img class='sprinkler-image' src={sprinklers} alt='sprinkler image' />
                </div>
            </div>
        </div>
    )
}

export default Home
