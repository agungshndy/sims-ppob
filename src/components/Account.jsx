import Logo from '../assets/Logo.png'
import Profile from '../assets/Profile Photo.png'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'

function Account(){
    const navigate = useNavigate()

    const { user } = useContext(UserContext);
    const { setUser } = useContext(UserContext);

    const handleLogout = ()=> {
        setUser(null);
        localStorage.removeItem('user');
        navigate('/');
    }

    return (
        <div id='account' className='container mx-auto'>
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
            <div className='flex justify-center'>
                <div className='grid grid-rows-2'>    
                    <img className='w-[100px] mx-auto' src={Profile} alt="profile picture" />        
                    <p className='text-xl font-semibold mt-2 text-center'>
                        {user ? `${user.firstname} ${user.lastname}` : 'Guest'}
                    </p>
                </div>
            </div>
            <div className='account-detail'>
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <div>
                        <input className='w-full rounded border border-gray-400 p-2 mt-2' type="email" name="email" id="email" value={user?.email || ''} readOnly/>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor="namaDepan">Nama Depan</label>
                    <div>
                        <input className='w-full rounded border border-gray-400 p-2 mt-2' type="text" name="namaDepan" id="namaDepan" value={user?.firstname || ''} readOnly/>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor="namaBelakang">Nama Belakang</label>
                    <div>
                        <input className='w-full rounded border border-gray-400 p-2 mt-2' type="text" name="namaBelakang" id="namaBelakang" value={user?.lastname || ''} readOnly/>
                    </div>
                </div>
                <div className='grid grid-cols-1 my-2'>
                    <button onClick={()=> navigate('/editprofile')} className="hover:cursor-pointer font-semibold rounded-md bg-white py-2 px-4 my-3 border border-transparent text-center text-sm text-red-800 hover:text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        Edit Profile
                    </button>
                    <button onClick={handleLogout} className="hover:cursor-pointer font-semibold rounded-md bg-red-600 py-2 px-4 my-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        Logout
                    </button>
                </div>    
            </div>
        </div>
    )
}

export default Account;