import React from 'react';
import { useState } from 'react';

function Contact () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name, email, message);
    }



    return (
        <div className='contact-form'>
            <h1>Contact Us: </h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48334.63356242094!2d-74.0050448105475!3d40.785891644836454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259afcda5009d%3A0x842a3dae11cd7e43!2sNew%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sde!4v1678105125249!5m2!1sen!2sde" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

  );
}

export default Contact;
