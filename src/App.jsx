// import { useState } from 'react'
import './index.css'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import TopUp from './components/TopUp'
import Transaction from './components/Transaction'
import TransactionDetail from './components/TransactionDetail'
import Account from './components/Account'
import EditProfile from './components/EditProfile'

function App() {

  return (
    <div>
      <Register/>
      <Login/>
      <Home/>
      <TopUp/>
      <Transaction/>
      <TransactionDetail/>
      <Account/>
      <EditProfile/>
    </div>
  )
}

export default App
