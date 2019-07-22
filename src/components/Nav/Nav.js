
import React, { useState, useEffect } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
function Nav() {
    const [navClass, setNavClass] = useState('top-nav')

    const toggleMenu = () => {
        if (navClass === 'top-nav') setNavClass('top-nav responsive')
        else setNavClass('top-nav')

    }
    return (
        <div className={`${navClass}`}>
            <div className="nav-links">
                <Link className='link' to='/' onClick={toggleMenu}>Home</Link>
                <Link className='link' to='/meetings' onClick={toggleMenu}>Meetings</Link>
                <div className="dropdown">
                    <button className="dropbtn">Water Turns{' '}
                        <i className="arrow down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link className='link' to='/timecard1' onClick={toggleMenu}>TC 1</Link>
                        <Link className='link' to='/timecard2' onClick={toggleMenu}>TC 2</Link>
                        <Link className='link' to='/timecard3' onClick={toggleMenu}>TC 3</Link>
                    </div>

                </div>
                <Link className='link' to='/about' onClick={toggleMenu}>About</Link>
                <Link className='link' to='/contact' onClick={toggleMenu}>Contact</Link>

            </div>
            <div className="drop-icon" onClick={toggleMenu}>&#9776;</div>
        </div >
    )
}

export default Nav
