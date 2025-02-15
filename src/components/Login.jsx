import Logo from '../assets/Logo.png'
import IlustrasiLogin from '../assets/Illustrasi Login.png'
// import axios from 'axios';
// import { useEffect, useState } from 'react';

function Login() {
   // const [user,setUser] = useState([]);

   // const API_URL = 'http://localhost:8000/data';
   // useEffect(()=>{
   //    getAllData();
   // },[]);

   // async function getAllData(){
   //    const response = await axios.get(API_URL);
   //    setUser(response.data);
   // }
 return (
 <div id='login' className='container mx-auto'>
    <div className='grid grid-cols-2'>
      <div className="registerForm w-3xs">
         <div className='logo'>
          <img src={Logo} alt="logo"/><p className='font-semibold'>SIMS PPOB</p>
          <h1 className='text-xl font-semibold'>Masuk atau buat akun untuk memulai</h1>
         </div>
          <input type="email" name="email" id="email" placeholder="Masukkan E-mail Anda" required/>
          <input type="password" name="buatPass" id="buatPass" placeholder="Masukkan Password Anda" required/>
          <input type="password" name="konfirmPass" id="konfirmPass" placeholder="Konfirmasi Password" required/>
          <button className="hover:cursor-pointer rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Masuk
          </button>
          <p className="text-sm">Belum punya akun? Registrasi <a href="">di sini</a></p>
      </div>
      <div className='logo'>
          <img src={IlustrasiLogin} alt="Ilustrasi Login" />
      </div>
    </div>
    {/* <div>
      <h2>Data User</h2>
      <ul>
         {
            user.map((user)=>(
              <div> 
                  {user.name}
                  {user.email}
              </div>
            ))
         }
      </ul>
    </div> */}
   </div>
 )   
}

export default Login;