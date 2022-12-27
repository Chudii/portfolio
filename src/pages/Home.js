import { Email, GitHub, LinkedIn } from '@material-ui/icons'
import '../styles/home.css'
import '../styles/icons.css'
import HTMLIcon from '../assets/images/html5-icon.svg'
import CSSIcon from '../assets/images/css3-icon.svg'
import JSIcon from '../assets/images/javascript-icon.svg'
import ReactIcon from '../assets/images/react-icon.png'
import NPMIcon from '../assets/images/npm-icon.svg'
import MaterialUIIcon from '../assets/images/material-ui-icon.svg'
import ReduxIcon from '../assets/images/redux-icon.svg'
import BootstrapIcon from '../assets/images/bootstrap-icon.svg'
import SCIcon from '../assets/images/styled-components-icon.png'
import NodeJSIcon from '../assets/images/nodejs-icon.svg'
import ExpressIcon from '../assets/images/expressjs-icon.svg'
import MongoDBIcon from '../assets/images/mongodb-icon.svg'
import SocketIoIcon from '../assets/images/socket.io-icon.svg'
import PostmanIcon from '../assets/images/postman-icon.svg'

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
                        <div className='skill-icons'>
                            <div>
                                <img id='html-icon' src={HTMLIcon} alt='html icon'/>
                                <p>HTML</p>
                            </div>
                            <div>
                                <img id='css-icon' src={CSSIcon} alt='css icon'/>
                                <p>CSS</p>
                            </div>
                            <div>
                                <img id='js-icon' src={JSIcon} alt='js icon'/>
                                <p>JavaScript</p>
                            </div>
                            <div>
                                <img id='react-icon' src={ReactIcon} alt='react icon'/>
                                <p>React</p>
                            </div>
                            <div>
                                <img id='redux-icon' src={ReduxIcon} alt='redux icon'/>
                                <p>Redux</p>
                            </div>
                            <div>
                                <img id='npm-icon' src={NPMIcon} alt='npm icon'/>
                                <p>NPM</p>
                            </div>
                            <div>
                                <img id='bootstrap-icon' src={BootstrapIcon} alt='bootstrap icon'/>
                                <p>Bootstrap</p>
                            </div>
                            <div>
                                <img id='materialui-icon' src={MaterialUIIcon} alt='materialui icon'/>
                                <p>Material UI</p>
                            </div>
                            <div>
                                <img id='sc-icon' src={SCIcon} alt='sc icon'/>
                                <p>Styled Components</p>
                            </div>
                        </div>
                    </li>
                    <li className='item'>
                        <h2>Back-End</h2>
                        <div className='skill-icons'>
                            <div>
                                <img id='nodejs-icon' src={NodeJSIcon} alt='ndoejs icon'/>
                                <p>NodeJS</p>
                            </div>
                            <div>
                                <img id='express-icon' src={ExpressIcon} alt='expressjs icon'/>
                                <p>ExpressJS</p>
                            </div>
                            <div>
                                <img id='mongodb-icon' src={MongoDBIcon} alt='mongodb icon'/>
                                <p>MongoDB</p>
                            </div>
                            <div>
                                <img id='socketio-icon' src={SocketIoIcon} alt='socketio icon'/>
                                <p>Socket.io</p>
                            </div>
                            <div>
                                <img id='postman-icon' src={PostmanIcon} alt='postman icon'/>
                                <p>Postman</p>
                            </div>
                        </div>
                        {/* <span>
                            NodeJs, ExpressJS, MongoDB, Socket.io, Postman
                        </span> */}
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home