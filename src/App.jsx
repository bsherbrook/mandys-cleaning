import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Contact from './components/Contact'

function App() {
  const [contactSwitch, setContactSwitch] = useState(false);
  const [width, setWidth]= useState(window.innerWidth);

  const breakpoint= 600;
  function contactModal(){
    setContactSwitch(true);
  }
  useEffect(()=>{
    window.addEventListener('resize',()=>setWidth(window.innerWidth));
  },[]);

  return (
    <>
      <Header 
        contactSwitch={contactSwitch}
        setContactSwitch={setContactSwitch}
        contactModal={contactModal}
      />
       {width < breakpoint && (<div> test success!!!</div>)}        
      {contactSwitch &&(
        <Contact 
          contactSwitch={contactSwitch}
          setContactSwitch={setContactSwitch}
          contactModal={contactModal}
        />
        )}
    </>
  )
}

export default App
