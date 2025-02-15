import Logo from '../assets/Logo.png'
import Profile from '../assets/Profile Photo.png'
import PBB from '../assets/PBB.png'
import Listrik from '../assets/Listrik.png'
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
import Banner1 from '../assets/Banner 1.png'
import Banner2 from '../assets/Banner 2.png'
import Banner3 from '../assets/Banner 3.png'
import Banner4 from '../assets/Banner 4.png'
import Banner5 from '../assets/Banner 5.png'
// import axios from 'axios';
// import { useEffect, useState } from 'react';

function Home() {
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
 <div id='home' className='container mx-auto'>
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
          <h2 className='font-semibold'>Kristanto Wibowo</h2>
        </div>
        <div className='bg-red-600 rounded'>
          <h1>Saldo anda</h1>
          <p>Rp</p>
          <p>Lihat Saldo</p>
        </div>
    </div>
    <div className='feature flex flex-auto'>
        <img src={PBB} alt="pbb" />PBB
        <img src={Listrik} alt="listrik" />Listrik
        <img src={Pulsa} alt="pulsa" />Pulsa
        <img src={PDAM} alt="pdam" />PDAM
        <img src={PGN} alt="pgn" />PGN
        <img src={TV} alt="televisi" />Televisi
        <img src={Musik} alt="musik" />Musik
        <img src={Game} alt="voucher game" />Voucher Game
        <img src={Voucher} alt="voucher makanan" />Voucher Makanan
        <img src={Kurban} alt="kurban" />Kurban
        <img src={Zakat} alt="zakat" />Zakat
        <img src={Paket} alt="paket data" />Paket Data
    </div>
    <div className='promo my-5'>
        <div className='flex'>
          <img src={Banner1} alt="banner 1" />
          <img src={Banner2} alt="banner 2" />
          <img src={Banner3} alt="banner 3" />
          <img src={Banner4} alt="banner 4" />
          <img src={Banner5} alt="banner 5" />
        </div>
    </div>
   </div>
 )   
}

export default Home;