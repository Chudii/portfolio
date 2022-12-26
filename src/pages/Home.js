import { Email, GitHub, LinkedIn } from '@material-ui/icons'
import '../styles/home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi, I'm <span>Chudi Ibida</span>.</h2>
                <div className='prompt'>
                    <p>An aspiring web developer fueled by a passion to learn and an eagerness to explore through design.</p>
                </div>
                
                <div className='icons'>
                    <GitHub className='github'/>
                    <LinkedIn className='linkedin'/>
                    <Email className='email'/>
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>
                            ReactJS, Redux, HTML, CSS, NPM, Bootstrap, MaterialUI, StyledComponents
                        </span>
                    </li>
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span>
                            NodeJs, ExpressJS, MongoDB, Socket.io
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home