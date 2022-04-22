import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact me</h2>

        <div className="container contact_container">   
            <div className="contact_options">  

                <article className="contact_option">
                <MdOutlineEmail />
                    <h4>Email</h4>
                    <h5>hugogabrielidis@gmail.com</h5>
                     <a href="mailto:hugogabrielidis@gmail.com">Send a message</a>
                </article>

                <article className="contact_option">
                <RiMessengerLine />
                    <h4>Messenger</h4>
                    <h5>Hugo GABRIELIDIS</h5>
                     <a href="https://m.me/hugo.gabrielidis">Send a message</a>
                </article>
            </div>
            

        </div>

        </section> 
    )
}

export default Contact
