import React from 'react'
import './Home.css'
import sprinklers from '../../Assets/sprinklers.jpeg'

function Home() {
    return (
        <div className='container'>
            <div className="content home-content">
                <h1>Welcome to Hooper Irrigation</h1>
                <div className="content-container">
                <p className='intro'>Hooper Irrigation Co. is a non-profit irrigation and secondary water company. This website is intended to help customers easily find information they need.</p>
                <img class='sprinkler-image' src={sprinklers} alt='sprinkler image'/>
                </div>
            </div>
        </div>
    )
}

export default Home
