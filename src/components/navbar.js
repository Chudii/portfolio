import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/navbar.css'
import { Reorder } from '@material-ui/icons'

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false)

    const location = useLocation()

    useEffect(() => {
        setExpandNavbar(false)
    }, [location])
    
    return (
        <div className='navbar' id={expandNavbar ? 'open' : 'close' }>
            <div className='toggle-btn'>
                <button
                    onClick={() => {
                        setExpandNavbar((prev) => !prev)
                    }}
                >
                    <Reorder />
                </button>
            </div>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar