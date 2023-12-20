import React from 'react'
import './About.css'
import directorApplication from '../../Assets/Director Application.pdf'
import directorCodeofEthics from '../../Assets/Director Code of Ethics.pdf'
function About() {
    return (
        <div className="container">
            <div className='content about-content'>
                <h1>About Us</h1>
                <span className="person">
                    <h4>Theo G. Cox - Board President, Frew Branch</h4>
                </span>
                <span className="person">
                    <h4>Rex Hancock - Vice President, West Weber Branch</h4>
                </span>
                <span className="person">
                    <h4>John Diamond - Treasurer, South Branch</h4>
                </span>
                <span className="person">
                    <h4>Stan Fowers - Director, Muskrat Branch</h4>
                </span>
                <span className="person">
                    <h4>Dave Favero - Director, Taylor Branch</h4>
                </span>
                <span className="person">
                    <h4>Clint Naisbitt - Director, Flinders Branch</h4>
                </span>
                <span className="person">
                    <h4> Dale Fowers - Director, North Fork Branch</h4>
                </span>
                <span className="person">
                    <h4>Scott Fowers - Water Master</h4>
                </span>
                <span className="person">
                    <h4>Dennis Flinders - Secondary Water Manager</h4>
                </span>
                <span className="person">
                    <h4>Michelle Pinkston - Secretary</h4>
                </span>
            </div>
            
        </div>
    )
}

export default About
