import Logo from '../assets/Logo.png'
import Profile from '../assets/Profile Photo.png'
import Listrik from '../assets/Listrik.png'
import PBB from '../assets/PBB.png'
import Pulsa from '../assets/Pulsa.png'
import PDAM from '../assets/PDAM.png'
import PGN from '../assets/PGN.png'
import TV from '../assets/Televisi.png'
import Musik from '../assets/Musik.png'
import Game from '../assets/Game.png'
import Voucher from '../assets/Voucher Makanan.png'
import Kurban from '../assets/Kurban.png'
import Zakat from '../assets/Zakat.png'
import Paket from '../assets/Paket Data.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
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

  const serviceMap = {
    pbb : {
      label : 'PBB',
      icon : PBB
    },
    listrik : {
      label : 'Listrik',
      icon : Listrik
      },
    pulsa : {
      label : 'Pulsa Prabayar',
      icon : Pulsa
    },
    pdam : {
      label : 'PDAM',
      icon : PDAM
    },
    pgn : {
      label : 'PGN',
      icon : PGN
    },
    televisi : {
      label : 'Televisi',
      icon : TV
    },
    musik : {
      label : 'Musik',
      icon : Musik
    },
    vouchergame : {
      label : 'Voucher Game',
      icon : Game
    },
    vouchermakanan : {
      label : 'Voucher Makanan',
      icon : Voucher
    },
    kurban : {
      label : 'Kurban',
      icon : Kurban
    },
    zakat : {
      label : 'Zakat',
      icon : Zakat
    },
    paketdata : {
      label : 'Paket Data',
      icon : Paket
    }
  }
  // const selectedService = serviceMap[service] || {
  //   label: 'Pilih Menu',
  //   icon: 'null'
  // }

  const location = useLocation();
  const queryParams= new URLSearchParams(location.search);
  const service = queryParams.get('service');

  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  const [ showBalance, setShowBalance ] = useState(false);

  return (
 <div id='transaction' className='container mx-auto'>
    <div className='header mb-5'>
              <div className="flex justify-between border-b-1 border-b-gray-100 p-2">
                 <div className='logo flex space-x-2 items-center'>
                  <img src={Logo} alt="logo"/>
                  <button onClick={()=> navigate('/home')} className='hover:cursor-pointer font-semibold'>SIMS PPOB</button>
                 </div>
                 <div>
                  <button onClick={()=> navigate('/topup')} className='hover:cursor-pointer mx-5'>Top Up</button>
                  <button onClick={()=> navigate('/transaction')} className='hover:cursor-pointer mx-5'>Transaction</button>
                  <button onClick={()=> navigate('/account')} className='hover:cursor-pointer mx-5'>Akun</button>
                </div>
              </div>
    </div>
    <div className='jumbotron grid grid-cols-2 my-5'>
            <div className='m-3 text-xl'>
              <img src={Profile} alt="profile picture" />
              <p className='mt-3'>Selamat datang,</p>
              <p className='text-3xl font-semibold'>
              {user ? `${user.firstname} ${user.lastname}` : 'Guest'}
              </p>
            </div>
            <div className='p-5 text-white font-semibold bg-red-600 rounded-xl items-center'>
              <h1 className='mb-5'>Saldo anda</h1>
              <p className='text-2xl mb-4'>{showBalance ? `Rp ${user ? user.balance : "0"}` : "Rp ******"}</p>
              <button className='hover:cursor-pointer text-md mt-2'
              onClick={()=> setShowBalance(!showBalance)}
              >{showBalance ? "Sembunyikan Saldo" : "Lihat Saldo"}
              </button>
            </div>
    </div>
    <div className='topup-feature my-5'>
        <p className='mb-3'>Pembayaran</p>
        <div className='flex space-x-2 mb-7'>
          {serviceMap[service] && (
          <div className='flex space-x-2 mb-7'>
            <img className='w-[25px]' src={serviceMap[service].icon} alt={service} />
            <h1 className='text-md font-semibold'>{serviceMap[service].label}</h1>
          </div>
          )}
        </div>
    <div className='grid grid-cols-1'>
        <input className='border border-gray-200 p-2 my-5 rounded-sm' type="text" name="nominal" id="nominal" placeholder='10.000'/> 
        <button className="hover:cursor-pointer font-semibold rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Bayar
        </button> 
    </div>  
    </div>
   </div>
 )   
}

export default Transaction;