import './index.css'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AccountPage from '../Pages/AccountPage'
import TransactionPage from '../Pages/TransactionPage'
import NotFound from '../Pages/NotFound'
import TopUpPage from '../Pages/TopUpPage'
import ProfilePage from '../Pages/ProfilePage'

const App = ()=> {
  return (
    <Router basename='/sims-ppob'>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/account" element={<AccountPage/>} />
        <Route path="/transaction" element={<TransactionPage/>} />
        <Route path="/topup" element={<TopUpPage/>} />
        <Route path="/editprofile" element={<ProfilePage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App
