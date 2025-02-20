import Logo from '../assets/Logo.png'
import IlustrasiLogin from '../assets/Illustrasi Login.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

const Register = ()=> {
   const [formData,setFormData] = useState({
      email:"",
      namaDepan:"",
      namaBelakang:"",
      password:"",
      konfirmPassword:"",
   });

   const API_URL = "http://localhost:8000/users";

   const handleChange = (e) => {
      setFormData({...formData,[e.target.name]: e.target.value});
   };

   const handleSubmit = async () => {
      if (formData.password !== formData.konfirmPassword) {
        alert("Password and Confirm Password do not match!");
        return;
      }
  
      try {
        const response = await axios.post(API_URL, {
          email: formData.email,
          firstname: formData.namaDepan,
          lastname: formData.namaBelakang,
          password: formData.password,
        });
  
        console.log("User registered!", response.data);
        alert("Registrasi berhasil!");
        navigate("/");
      } catch (error) {
        console.error("Error registering user!", error);
        alert("Registrasi gagal!");
      }
    };

   const navigate = useNavigate()

 return (
 <div id='register' className='container mx-auto'>
    <div className='grid grid-cols-2 items-center'>
      <div className="registerForm mx-auto">
         <div className='logo mb-5 flex space-x-2 items-center justify-center'>
            <img src={Logo} alt="logo"/>
            <p className='text-xl font-semibold'>SIMS PPOB</p>            
         </div>
         <h1 className='text-xl font-semibold my-5'>Lengkapi data untuk membuat akun</h1>
         <div className='flex flex-col justify-center'>
            <input className='p-2 border rounded-sm border-gray-200 my-5 outline-blue-600 text-sm' 
               type="email" 
               name="email" 
               value={formData.email} 
               onChange={handleChange} 
               placeholder="Masukkan E-mail Anda" 
               required
            />
            <input className='p-2 border rounded-sm border-gray-200 mb-5 outline-blue-600 text-sm' 
               type="text" 
               name="namaDepan" 
               value={formData.namaDepan} 
               onChange={handleChange} 
               placeholder="Nama Depan" 
               required
            />
            <input className='p-2 border rounded-sm border-gray-200 mb-5 outline-blue-600 text-sm' 
               type="text" 
               name="namaBelakang" 
               value={formData.namaBelakang} 
               onChange={handleChange} 
               placeholder="Nama Belakang" 
               required
               />
            <input className="p-2 border rounded-sm border-gray-200 mb-5 outline-blue-600 text-sm"
               type="password" 
               name='password' 
               value={formData.password} 
               onChange={handleChange} 
               placeholder="Buat Password"
               required
            />
            <input className="p-2 border rounded-sm border-gray-200 mb-5 outline-blue-600 text-sm"
               type="password"
               name='konfirmPassword' 
               value={formData.konfirmPassword} 
               onChange={handleChange} 
               placeholder="Konfirm Password"
               required
            />
            <button onClick={handleSubmit} className="hover:cursor-pointer rounded-sm bg-red-600 py-2 px-4 border border-transparent font-semibold text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Registrasi
            </button>
            <p className="text-xs mt-3 text-center">Sudah punya akun? Login <button onClick={()=> navigate('/')} className='hover:cursor-pointer text-red-600 font-semibold'>di sini</button></p>
         </div>
      </div>
      <div className='logo'>
          <img src={IlustrasiLogin} alt="Ilustrasi Login" />
      </div>
    </div>
   </div>
 )   
}

export default Register;