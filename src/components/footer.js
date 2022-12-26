import { Email, GitHub, LinkedIn } from '@material-ui/icons'
import React from 'react'
import '../styles/footer.css'

const Footer = () => {

    return (
        <div className='footer'>
            <div className='social-media'>
                <p>An aspiring web developer fueled by a passion to learn and an eagerness to explore through design.</p>
                <div className='icons'>
                    <GitHub id='github'/>
                    <LinkedIn id='linkedin'/>
                    <Email id='email'/>
                </div>
            </div>
            <p> &copy; 2022 codenamechu.com</p>
        </div>
    )
}

export default Footer