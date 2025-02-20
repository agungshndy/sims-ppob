// import { useState } from 'react'
import './index.css'
// import Register from './components/Register'
// import Login from './components/Login'
// import Home from './components/Home'
// import TopUp from './components/TopUp'
// import Transaction from './components/Transaction'
// import TransactionDetail from './components/TransactionDetail'
// import Account from './components/Account'
// import EditProfile from './components/EditProfile'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AccountPage from '../Pages/AccountPage'
import TransactionPage from '../Pages/TransactionPage'
import NotFound from '../Pages/NotFound'

const App = ()=> {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/account" element={<AccountPage/>} />
        <Route path="/transaction" element={<TransactionPage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App
