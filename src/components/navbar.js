import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='toggle-btn'>
                <button></button>
            </div>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/exp'>Experience</Link>
            </div>
        </div>
    )
}

export default Navbar