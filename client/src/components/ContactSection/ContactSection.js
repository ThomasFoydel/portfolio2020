import React, { useState } from 'react';
import github from 'imgs/socials/github2.png';
import youtube from 'imgs/socials/youtubebwinvert.png';
import linkedin from 'imgs/socials/linkedinpaddingtransparent.png';
import axios from 'axios';

import './ContactSection.scss';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    let { value, id } = e.target;
    setForm((form) => ({ ...form, [id]: value }));
  };
  const sendMessage = () => {
    console.log(form);
    axios.post('/message', form);
  };

  let { message, name, email } = form;
  return (
    <div className='contact-section'>
      <div className='form'>
        <p>Name:</p>
        <input value={name} type='text' id='name' onChange={handleChange} />
        <p>E-mail:</p>
        <input value={email} type='email' id='email' onChange={handleChange} />
        <p>Message:</p>
        <textarea value={message} id='message' onChange={handleChange} />
        <button onClick={sendMessage}>send</button>
      </div>
      <div className='icons'>
        <a
          href='https://github.com/thomasfoydel'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='icon github' src={github} alt='' />
        </a>
        <a
          href='https://www.linkedin.com/in/thomasfoydel/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='icon linkedin' src={linkedin} alt='' />
        </a>
        <a
          href='https://www.youtube.com/channel/UCqXV2F5G9Bv0HWVUDAKApYA'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='icon youtube' src={youtube} alt='' />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
