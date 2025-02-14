// import { useState } from 'react'
import Register from './register'
import Logo from './assets/Logo.png'
import IlustrasiLogin from './assets/Illustrasi Login.png'
import './index.css'

function App() {

  return (
    <>
    <div className='container mx-auto'>
      <div className='grid grid-cols-2'>
        <div className='register'>
            <div className='simsLogo'>
              <img src={Logo} alt="logo" />SIMS PPOB
            </div>
            <h1 className='text-xl'></h1>
            <Register/>
            <div className="card">
              <p></p>
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
