import profilePic from '../assets/images/profile-pic.jpg'

const About = () => {
    const text = `
    Hello World, I am Chudi Ibida.

    The process of bridging concepts and using software to create a smoother user experience, to me, is artistic expression and a science that has always fascinated me. More importantly, there is no ceiling as to the potential for social impact it can provide as our world transitions deeper into the digital era.
    
    There's nothing I enjoy more than something that challenges the way I think. So everyday I commit to strengthening my understanding or learning something entirely new.
    
    I am excited make the leap and refine my skills as I become a valuable asset with the right company. 
    
    If you would like to connect, please don't hesitate to reach out!
    `

    return (
        <div className='about'>
            <h1>About Me</h1>
            <p>/choo-dee ee-BEE-dah/</p>
            <div className='about-content'>
                <img className='profile-pic' src={profilePic} alt='' />
                <div className='about-text'>
                    <p>{text}</p>
                </div>
            </div>
            
        </div>
    )
}

export default About