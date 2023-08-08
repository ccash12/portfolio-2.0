import React from 'react';
import emailjs from 'emailjs-com';
import { Link } from "react-router-dom"


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
                    
                </div>
            </form>
                <div className="ContactMeLinks">
                    
                    <Link to="https://www.linkedin.com/in/courtney-cash-616a8617b/" >
                    LinkedIn 
                    </Link>
                    <Link to="https://docs.google.com/document/d/1BydFGckvSLP4Voop71_L3cXkY9JndVVk6puScw3vGg0/edit">
                    Resume
                    </Link>
                    <Link to="https://www.facebook.com/courtney.cash1/"> 
                    Facebook
                    </Link>
                    
            </div>
        </div>
    )
}

export default ContactMe;