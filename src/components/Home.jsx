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
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from './UserContext'

const Home = ()=> {

  const navigate = useNavigate()

  const { user } = useContext(UserContext);

  return (
 <div id='home' className='container mx-auto'>
    <div className='header mb-5'>
          <div className="flex justify-between border-b-1 border-b-gray-100 p-2">
             <div className='logo flex space-x-2 items-center'>
              <img src={Logo} alt="logo"/>
              <p className='text-md font-semibold'>SIMS PPOB</p>
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
        <div className='p-5 text-white font-semibold bg-red-600 rounded-xl'>
          <h1 className='mb-4'>Saldo anda</h1>
          <p className='text-2xl mb-7'>Rp</p>
          <button className='hover:cursor-pointer text-xs'>Lihat Saldo</button>
        </div>
    </div>
    <div className='feature grid grid-cols-12 justify-items-center mt-10'>
        <div className='items-center text-center text-xs'>
          <img className='mb-2' src={PBB} alt="pbb" />
          <p>PBB</p>
        </div>
        <div className='items-center text-center text-xs'>
          <img className='mb-2' src={Listrik} alt="listrik" />
          <p>Listrik</p>
        </div>
        <div className='items-center text-center text-xs'>
          <img className='mb-2' src={Pulsa} alt="pulsa" />
          <p>Pulsa</p>
        </div>
        <div className='items-center text-center text-xs'>
          <img className='mb-2' src={PDAM} alt="pdam" />
          <p>PDAM</p>
        </div>
        <div className='items-center text-center text-xs'>
          <img className='mb-2' src={PGN} alt="pgn" />
          <p>PGN</p>
        </div>
        <div className='items-center text-center text-xs'>
          <img className='mb-2' src={TV} alt="televisi" />
          <p>Televisi</p>
        </div>
        <div className='items-center text-center text-xs'>
          <img className='mb-2' src={Musik} alt="musik" />
          <p>Musik</p>
        </div>
        <div className='items-center text-center text-xs'>
          <img className='mb-2 mx-auto' src={Game} alt="voucher game" />
          <p>Voucher Game</p>
        </div>
        <div className='items-center text-center text-xs'>
          <img className='mb-2 mx-auto' src={Voucher} alt="voucher makanan" />
          <p>Voucher Makanan</p>
        </div>
        <div className='items-center text-center text-xs'>
          <img className='mb-2' src={Kurban} alt="kurban" />
          <p>Kurban</p>
        </div>
        <div className='items-center text-center text-xs'>
          <img className='mb-2' src={Zakat} alt="zakat" />
          <p>Zakat</p>
        </div>
        <div className='items-center text-center text-xs'>
          <img className='mb-2' src={Paket} alt="paket data" />
          <p>Paket Data</p>
        </div>
    </div>
    <div className='promo my-5'>
        <div className='font-semibold text-md mt-7 mb-4'>
          <p>Temukan promo menarik</p>
        </div>
        <div className='flex gap-7'>
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