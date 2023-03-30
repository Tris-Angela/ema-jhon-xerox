import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Shop from './components/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Shop></Shop>
    </div>
  )
}

export default App
