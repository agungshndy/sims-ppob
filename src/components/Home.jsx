import Logo from '../assets/Logo.png'
import Profile from '../assets/Profile Photo.png'
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
 <div id='home'>
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
    <div className='jumbotron'>
        <div>
          <img src={Profile} alt="profile picture" />
          <p>Selamat datang,</p>
          <h2 className='font-semibold'>Kristanto Wibowo</h2>
        </div>
    </div>
   </div>
 )   
}

export default Home;