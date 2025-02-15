import Logo from '../assets/Logo.png'
import Profile from '../assets/Profile Photo.png'
// import axios from 'axios';
// import { useEffect, useState } from 'react';

function TopUp() {
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
 <div id='topup' className='container mx-auto'>
    <div className='header mb-5'>
      <div className="">
         <div className='logo'>
          <img src={Logo} alt="logo"/><p className='font-semibold'>SIMS PPOB</p>
         </div>
          <a className='mx-5' href="">Top Up</a>
          <a className='mx-5' href="">Transaction</a>
          <a className='mx-5' href="">Akun</a>
      </div>
    </div>
    <div className='jumbotron grid grid-cols-2 my-5'>
        <div>
          <img src={Profile} alt="profile picture" />
          <p>Selamat datang,</p>
          <h2 className='text-xl font-semibold'>Kristanto Wibowo</h2>
        </div>
        <div className='bg-red-600 rounded'>
          <h1>Saldo anda</h1>
          <p>Rp</p>
          <p>Tutup Saldo</p>
        </div>
    </div>
    <div className='topup-feature my-5'>
        <p>Silahkan masukkan</p>
        <h1 className='text-xl font-semibold'>Nominal Top Up</h1>
    <div className='grid grid-cols-2'>
      <div className='grid grid-cols-1'>
        <input className='border-1 my-5' type="text" name="nominal" id="nominal" placeholder='Masukkan nominal top up'/> 
        <button className="hover:cursor-pointer rounded-md bg-gray-300 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Top Up
        </button> 
      </div>
      <div>
        <div className='grid grid-cols-3'>
          <button className='border-1 m-3 rounded hover:cursor-pointer'>Rp10.000</button>
          <button className='border-1 m-3 rounded hover:cursor-pointer'>Rp20.000</button>
          <button className='border-1 m-3 rounded hover:cursor-pointer'>Rp50.000</button>
          <button className='border-1 m-3 rounded hover:cursor-pointer'>Rp100.000</button>
          <button className='border-1 m-3 rounded hover:cursor-pointer'>Rp250.000</button>
          <button className='border-1 m-3 rounded hover:cursor-pointer'>Rp500.000</button>
        </div>
      </div>
    </div>  
    </div>
   </div>
 )   
}

export default TopUp;