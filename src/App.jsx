import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Contact />
    </>
  )
}

export default App
