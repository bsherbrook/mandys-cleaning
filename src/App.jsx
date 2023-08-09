import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Contact from './components/Contact'
import MobileHeader from './components/MobileHeader'
import HomePage from './components/Home'
import AboutUs from './components/AboutUs'

function App() {
  const [contactSwitch, setContactSwitch] = useState(false);
  const [homeSwitch, setHomeSwitch]= useState(true);
  const [aboutSwitch, setAboutSwitch]= useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [width, setWidth]= useState(window.innerWidth);

  const breakpoint= 600;

  useEffect(()=>{
    window.addEventListener('resize',()=>setWidth(window.innerWidth));
  },[]);

  return (
    <>
    {width > breakpoint ?<Header 
          setContactSwitch={setContactSwitch}
          setHomeSwitch={setHomeSwitch}
          setAboutSwitch={setAboutSwitch}
      /> :
        <MobileHeader
          setContactSwitch={setContactSwitch}
          setHomeSwitch={setHomeSwitch}
          setAboutSwitch={setAboutSwitch}
      />    
      }
      {homeSwitch &&(<HomePage />)}   
      {aboutSwitch &&(<AboutUs />)}    
      {contactSwitch &&(
        <Contact 
          setContactSwitch={setContactSwitch}
          setHomeSwitch={setHomeSwitch}
          setName={setName}
          setEmail={setEmail}
          setMessage={setMessage}
          name={name}
          message={message}
          email={email}
        />
        )}
    </>
  )
}

export default App
