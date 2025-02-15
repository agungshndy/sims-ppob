import Logo from '../assets/Logo.png'
import IlustrasiLogin from '../assets/Illustrasi Login.png'
// import axios from 'axios';
// import { useEffect, useState } from 'react';

function Register() {
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
 <div>
    <div className='grid grid-cols-2'>
      <div className="registerForm w-3xs">
         <div className='simsLogo'>
            <img src={Logo} alt="logo"/><p className='font-bold'>SIMS PPOB</p>
         </div>
            <input type="email" name="email" id="email" placeholder="Masukkan E-mail Anda" required/>
            <input type="text" name="namaDepan" id="namaDepan" placeholder="Nama Depan" required/>
            <input type="text" name="namaBelakang" id="namaBelakang" placeholder="Nama Belakang" required/>
            <input type="password" name="buatPass" id="buatPass" placeholder="Buat Password" required/>
            <input type="password" name="konfirmPass" id="konfirmPass" placeholder="Konfirmasi Password" required/>
            <button className="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
            Registrasi
            </button>
            <p className="text-sm">Sudah punya akun? Login <a href="">di sini</a></p>
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

export default Register;