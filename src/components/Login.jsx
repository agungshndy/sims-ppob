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
    <div className='grid grid-cols-2 items-center'>
      <div className="registerForm mx-auto">
         <div className='logo flex space-x-2 items-center'>
          <img src={Logo} alt="logo"/>
          <p className='text-xl font-semibold'>SIMS PPOB</p>          
         </div>
          <h1 className='text-xl font-semibold'>Masuk atau buat akun untuk memulai</h1>
          <div className='flex flex-col'>
            <input className='p-2 border rounded-sm border-gray-200 my-5 outline-blue-600 text-sm' type="email" name="email" id="email" placeholder="Masukkan E-mail Anda" required/>
            <div className="relative flex items-center mb-5">
                <input type="password" placeholder="Masukkan Password Anda"
                    className="p-2 bg-[#fdfeff] focus:bg-transparent w-full text-sm border border-gray-200 outline-blue-600 rounded transition-all" />

                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"></path>
                </svg>
              </div>
              <div className="relative flex items-center mb-5">
                <input type="password" placeholder="Konfirmasi Password"
                    className="p-2 bg-[#fdfeff] focus:bg-transparent w-full text-sm border border-gray-200 outline-blue-600 rounded transition-all" />

                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"></path>
                </svg>
              </div>
              <button className="hover:cursor-pointer rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Masuk
              </button>
            </div>
          
          <p className="text-sm">Belum punya akun? Registrasi <a href="#register">di sini</a></p>
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