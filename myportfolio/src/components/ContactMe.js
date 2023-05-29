import React from 'react';
import emailjs from 'emailjs-com';


function ContactMe() {  
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_guy505c', 'template_rkkxzrw', e.target, 'user_vlPzjlDuOayKajM3ZxmBk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
        };


    return(
        <div className="formbox"> 
            <div className="FormBoxTitle">
            <h3>Contact Me</h3>
            </div>
            <form onSubmit={sendEmail}> 
            <div className='FormInput'>
                <input
                    type="text" 
                    name='name'
                    placeholder="Name"
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                />
                <textarea
                    type="text"
                    name="message"
                    placeholder="Your Message">
                </textarea>
                <button type='submit'>
                    Send Message
                </button>
                    {/* type='submit'
                    value="Send Message"
                /> */}
                </div>
            </form>
        </div>
    )
}

export default ContactMe;