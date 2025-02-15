// import { useState } from 'react'
import './index.css'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import TopUp from './components/TopUp'

function App() {

  return (
    <div className='container mx-auto'>
      <Register/>
      <Login/>
      <Home/>
      <TopUp/>
    </div>
  )
}

export default App
