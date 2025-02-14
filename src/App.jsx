import { useState } from 'react'
import Register from './register'
import Logo from './assets/Logo.png'
import IlustrasiLogin from './assets/Illustrasi Login.png'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container mx-auto'>
      <div className='grid grid-cols-2'>
        <div className='register'>
            <div className='simsLogo'>
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
            <p></p>
        </div>
        <div className='logo'>
          <img src={IlustrasiLogin} alt="Ilustrasi Login" />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
