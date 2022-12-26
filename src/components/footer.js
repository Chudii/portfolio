import { Email, GitHub, Instagram, LinkedIn } from '@material-ui/icons'
import React from 'react'
import '../styles/footer.css'

const Footer = () => {

    return (
        <div className='footer'>
            <div className='social-media'>
                <div className='icons'>
                    <Instagram className='instagram'/>
                    <GitHub className='github'/>
                    <LinkedIn className='linkedin'/>
                    <Email className='email'/>
                </div>
            </div>
            <p> &copy; 2022 codenamechu.com</p>
        </div>
    )
}

export default Footer