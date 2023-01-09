import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>To do list avec redux<h2/>
      <form action="">
        <div>
          <input type="text" placeholder='add tack' />
        </div>
        <div>
          <ul>
            <li>Task 1</li>
            <li>Task 2</li>
          </ul>
        </div>
        <h1>Allah akbar !</h1>
      </form>
    </div>
  )
}

export default App
