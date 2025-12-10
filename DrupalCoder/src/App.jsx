import { useState } from 'react'
import './App.css'
import Masha from './Masha'
import Sasha from './Sasha'
import Seva from './Seva'
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
