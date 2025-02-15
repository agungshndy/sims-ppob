import Logo from '../assets/Logo.png'
import Profile from '../assets/Profile Photo.png'
import Listrik from '../assets/Listrik.png'
// import axios from 'axios';
// import { useEffect, useState } from 'react';

function Transaction() {
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
 <div id='transaction'>
    <div className='header mb-5'>
              <div className="flex justify-between border-b-1 border-b-gray-100 p-2">
                 <div className='logo flex space-x-2 items-center'>
                  <img src={Logo} alt="logo"/>
                  <p className='text-md font-semibold'>SIMS PPOB</p>
                 </div>
                 <div>
                  <a className='mx-5' href="">Top Up</a>
                  <a className='mx-5' href="">Transaction</a>
                  <a className='mx-5' href="">Akun</a>
                </div>
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
        <p>Pembayaran</p>
        <div className='flex space-x-2'>
          <img className='w-[25px]' src={Listrik} alt="listrik icon" />
          <h1 className='text-md font-semibold'>Listrik Prabayar</h1>
        </div>
    <div className='grid grid-cols-1'>
        <input className='border-1 my-5' type="text" name="nominal" id="nominal" placeholder='10.000'/> 
        <button className="hover:cursor-pointer rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Bayar
        </button> 
    </div>  
    </div>
   </div>
 )   
}

export default Transaction;