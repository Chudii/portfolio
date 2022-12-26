import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import ReorderIcon from '@material-ui/icons'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='toggle-btn'>
                <button
                    onClick={() => {
                        setExpandNavbar((prev) => !prev)
                    }}
                >
                    <ReorderIcon />
                </button>
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