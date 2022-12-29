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
            </div>
        </div>
    )
}

export default Contact