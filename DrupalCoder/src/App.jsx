import { useState } from 'react'
import './App.css'
import Masha from './Masha/Masha'
import Sasha from './Sasha/Sasha'
import Seva from './Seva/Seva'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Seva />
      <Sasha />
      <Masha />
    </>
  )
}

export default App
