import Logo from '../assets/Logo.png'
import Profile from '../assets/Profile Photo.png'
// import axios from 'axios';
// import { useEffect, useState } from 'react';

function TransactionDetail() {
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
 <div id='transaction-detail' className='container mx-auto'>
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
    <div className='transaction-detail my-5'>
        <p className='font-md font-semibold'>Semua Transaksi</p>
      <div className='grid grid-cols-1'>
        <div className='p-2 border-1 rounded flex justify-between my-2'>
          <div className=''>
            <p>Rp.10.000</p>
            <p>17 Agustus 2023 13.10 WIB</p>
          </div>
          <div>
            <p>Top Up Saldo</p>
          </div>
        </div>
        <div className='p-2 border-1 rounded flex justify-between my-2'>
          <div className=''>
            <p>Rp.10.000</p>
            <p>17 Agustus 2023 13.10 WIB</p>
          </div>
          <div>
            <p>Top Up Saldo</p>
          </div>
        </div>
        <div className='p-2 border-1 rounded flex justify-between my-2'>
          <div className=''>
            <p>Rp.10.000</p>
            <p>17 Agustus 2023 13.10 WIB</p>
          </div>
          <div>
            <p>Top Up Saldo</p>
          </div>
        </div>
        <div className='p-2 border-1 rounded flex justify-between my-2'>
          <div className=''>
            <p>Rp.10.000</p>
            <p>17 Agustus 2023 13.10 WIB</p>
          </div>
          <div>
            <p>Top Up Saldo</p>
          </div>
        </div>
        <div className='p-2 border-1 rounded flex justify-between my-2'>
          <div className=''>
            <p>Rp.10.000</p>
            <p>17 Agustus 2023 13.10 WIB</p>
          </div>
          <div>
            <p>Top Up Saldo</p>
          </div>
        </div>
      </div>
      <div className='font-semibold text-red-800 flex justify-center'>
        <a className='' href="">Show more</a>
      </div>  
    </div>
  </div>
 )   
}

export default TransactionDetail;