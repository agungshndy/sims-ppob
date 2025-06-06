import { useContext, useState } from 'react';
import Logo from '../assets/Logo.png'
import Profile from '../assets/Profile Photo.png'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';
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

  const navigate = useNavigate()
  const { user, fetchUser } = useContext(UserContext)

  const [ showBalance, setShowBalance ] = useState(false);

  const [ nominal, setNominal ] = useState('');

  const handlePresetClick = (amount)=> {
    setNominal(amount.toString());
  }

  const handleTopUp = async () => {
    const amount = parseInt(nominal, 10);
    if (!isNaN(amount) && amount > 0 && user) {
      const newBalance = user.balance + amount;

      try {
      await axios.put(`https://67b779ea2bddacfb270f1206.mockapi.io/api/sims-ppob/users/${user.id}`, {
        balance: newBalance
      });
      await fetchUser(user.id);
      setNominal('');
      alert("Top up berhasil!");
      }
      catch (error) {
        console.error("Top up gagal", error);
        alert("Top up gagal!");
      }
    } else {
        alert("Masukkan nominal yang valid!")
    }
  }

  return (
 <div id='topup' className='container mx-auto'>
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
              onClick={()=>setShowBalance(!showBalance)}
              >
              {showBalance ? "Sembunyikan Saldo" : "Lihat Saldo"}
              </button>
            </div>
        </div>
    <div className='topup-feature my-10'>
        <p>Silahkan masukkan</p>
        <h1 className='text-xl font-semibold mb-5'>Nominal Top Up</h1>
    <div className='grid grid-cols-3'>
      <div className='grid grid-cols-1 col-span-2'>
        <input  className='border border-gray-200 p-2 mt-3 rounded-sm' 
                type="text" 
                name="nominal" 
                id="nominal" 
                placeholder='Masukkan nominal top up'
                value={nominal}
                onChange={(e)=> setNominal(e.target.value)}
        /> 
        <button 
        onClick={handleTopUp}
        className="hover:cursor-pointer my-5 rounded-md bg-gray-300 py-2 px-4 border border-transparent font-semibold text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Top Up
        </button> 
      </div>
      <div className='flex items-center justify-items-center'>
        <div className='grid grid-cols-3'>
          <button 
          onClick={()=> handlePresetClick(10000)}
          className='p-2 border border-gray-200 ml-3 mt-1 mb-3 rounded hover:cursor-pointer hover:border-red-500 active:bg-red-500 active:font-semibold'>
            Rp10.000
          </button>
          <button 
          onClick={()=> handlePresetClick(20000)}
          className='p-2 border border-gray-200 mx-2 mt-1 mb-3 rounded hover:cursor-pointer hover:border-red-500 active:bg-red-500 active:font-semibold'>
            Rp20.000
          </button>
          <button 
          onClick={()=> handlePresetClick(50000)}
          className='p-2 border border-gray-200 mr-3 mt-1 mb-3 rounded hover:cursor-pointer hover:border-red-500 active:bg-red-500 active:font-semibold'>
            Rp50.000
          </button>
          <button 
          onClick={()=> handlePresetClick(100000)}
          className='p-2 border border-gray-200 ml-3 my-2 rounded hover:cursor-pointer hover:border-red-500 active:bg-red-500 active:font-semibold'>
            Rp100.000
          </button>
          <button 
          onClick={()=> handlePresetClick(250000)}
          className='p-2 border border-gray-200 m-2 rounded hover:cursor-pointer hover:border-red-500 active:bg-red-500 active:font-semibold'>
            Rp250.000
          </button>
          <button 
          onClick={()=> handlePresetClick(500000)}
          className='p-2 border border-gray-200 mr-3 my-2 rounded hover:cursor-pointer hover:border-red-500 active:bg-red-500 active:font-semibold'>
            Rp500.000
          </button>
        </div>
      </div>
    </div>  
    </div>
   </div>
 )   
}

export default TopUp;