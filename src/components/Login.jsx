import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import Logo from '../assets/Logo.png'
import IlustrasiLogin from '../assets/Illustrasi Login.png'

const Login = ()=> {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleLogin = async ()=> {
    try {
      const response = await axios.get(API_URL);
      const users = response.data;

      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        alert("Login Success!");
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/home');
      } else {
        alert("Invalid email address or password!");
      }
    }
    catch (error) {
      console.error('Error logging in!', error);
      alert("Login failed, try again!")
    }
  }

  const API_URL = 'http://localhost:8000/users'
  const navigate = useNavigate()

 return (
 <div id='login' className='container mx-auto'>
    <div className='grid grid-cols-2 items-center'>
      <div className="registerForm mx-auto w-[20rem] max-sm:w-auto">
         <div className='logo flex space-x-2 justify-center items-center'>
          <img src={Logo} alt="logo"/>
          <p className='text-xl font-semibold'>SIMS PPOB</p>          
         </div>
          <div className='text-xl font-semibold text-center mt-4 mb-3'>
            <h1>Masuk atau buat akun</h1>
            <h1>untuk memulai</h1>
          </div>
          <div className='flex flex-col'>
            <input 
              className='w-auto p-2 border rounded-sm border-gray-200 my-5 outline-blue-600 text-sm' 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Masukkan E-mail Anda" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required/>
            <input
              className="p-2 border rounded-sm border-gray-200 mb-5 outline-blue-600 text-sm"
              type="password" 
              placeholder="Masukkan Password Anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
              <button 
              className="hover:cursor-pointer rounded-md bg-red-600 mb-2 py-2 px-4 border border-transparent font-semibold text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
              type="button"
              onClick={handleLogin}
              >
              Masuk
              </button>
            </div>
          
          <p className="mt-3 text-xs text-center">Belum punya akun? Registrasi <button onClick={()=> navigate('/register')} className='hover:cursor-pointer text-red-600 font-semibold'>di sini</button></p>
      </div>
      <div className='logo'>
          <img src={IlustrasiLogin} alt="Ilustrasi Login" />
      </div>
    </div>
   </div>
 )   
}

export default Login;