import '../styles/contact.css'
import Typewriter from 'typewriter-effect'

const Contact = () => {

    return (
        <div className='contact'>
            <div className='contact-form'>
                <div className='typewriter'>
                    <p className='text first-text'>Looking to </p>
                    <Typewriter 
                        
                        options={{
                            strings: ['Connect.', 'Explore.', 'Learn.', 'Create.'],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: 'typewrite',
                            cursorClassName: 'typewrite-cursor'
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .changeDeleteSpeed(20)
                                .deleteAll()
                                .start()
                        }}
                    />
                </div>
                <form>
                    <input type='text' placeholder='First Name'/>
                    <input type='text' placeholder='Last Name'/>
                    <input type='text' placeholder='Email'/>
                    <textarea placeholder='Message'/>
                </form>
            </div>
        </div>
    )
}

export default Contact