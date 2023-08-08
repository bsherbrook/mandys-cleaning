import { useState } from 'react';
import './Contact.css';
import Button from "@mui/material/Button";

const ContactForm = () => {
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
    // You can handle form submission logic here, e.g., send data to a server or display a confirmation message.
    console.log('Submitted:', { name, email, message });
  };

  return (
    <div id='formBox' className='bg-rose-100 flex flex-col justify-center items-center'>
      <h1 id='formTitle' className='text-3xl p-5'>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={handleMessageChange} rows="4" />
        </div>
        <div>
          <Button variant='outlined' onClick={handleSubmit}>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;