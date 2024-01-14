import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div name='contact' className='cs'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" >
            <div className='ss'>
                <p className='p1'>Interested in What We Do?</p>
                <p className='p2'>Begin an empowering journey at Oh! Phuleez.</p>
            </div>
            <input className='i1' type="text" placeholder='Name' name='name' />
            <input className='i2' type="email" placeholder='Email' name='email' />
            <textarea name="message" rows="10" placeholder='Message'></textarea>
            <button style={{ marginLeft: "10rem", marginTop: "2rem" }}>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact