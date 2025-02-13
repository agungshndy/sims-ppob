import { useState } from 'react'
import Register from './register'
import Logo from './assets/Logo.png'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
      <img src={Logo} alt="logo" />SIMS PPOB
      </div>
      <h1 className='text-xl'>Vite + React</h1>
      <Register/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
