import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Datatabler from './Datatabler'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Datatabler/>
  )
}

export default App
