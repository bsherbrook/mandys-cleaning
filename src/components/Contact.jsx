import { useEffect, useState } from 'react';
import './Contact.css';
import Button from "@mui/material/Button";

export default function ContactForm(props){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { name, email, message });
    props.setContactSwitch(false);
  };

  return (
    <div id='formBoxBox' className="flex justify-center items-center p-20">
        <div id='formBox' className='bg-rose-100 flex flex-col justify-center items-center'>
          <h1 id='formTitle' className='text-3xl p-5'>Contact Us</h1>
          <form onSubmit={handleSubmit} className=''>
            <div>
              <label>Name:</label><br />
              <input className='rounded-lg pl-1' id='nameInput' type="text" value={name} onChange={handleNameChange} required />
            </div>
            <div>
              <label>Email:</label><br />
              <input className='rounded-lg pl-1' id='emailInput' type="email" value={email} onChange={handleEmailChange} required />
            </div>
            <div>
              <label>Message:</label><br />
              <textarea className='rounded-lg pl-1' id='messageInput' value={message} onChange={handleMessageChange} rows="4" />
            </div>
            <div className='flex justify-end'>
              <Button id='contactButton' variant='outlined' color='secondary' onClick={handleSubmit}>Submit</Button>
            </div>
          </form>
        </div>
    </div>
  );
}