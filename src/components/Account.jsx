import Logo from '../assets/Logo.png'
import Profile from '../assets/Profile Photo.png'

function Account(){
    return (
        <div id='account' className='container mx-auto'>
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
            <div className='flex justify-center'>
                <div className='grid grid-rows-2'>    
                    <img className='w-[100px] mx-auto' src={Profile} alt="profile picture" />        
                    <p className='text-xl font-semibold mt-2'>Kristanto Wibowo</p>
                </div>
            </div>
            <div className='account-detail'>
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <div className='rounded border-1 p-2 mt-2'>
                        <input type="email" name="email" id="email" placeholder='email@gmail.com'/>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor="namaDepan">Nama Depan</label>
                    <div className='rounded border-1 p-2 mt-2'>
                        <input type="text" name="namaDepan" id="namaDepan" placeholder='Kristanto'/>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor="namaBelakang">Nama Belakang</label>
                    <div className='rounded border-1 p-2 mt-2'>
                        <input type="text" name="namaBelakang" id="namaBelakang" placeholder='Wibowo'/>
                    </div>
                </div>
                <div className='grid grid-cols-1 my-2'>
                    <button className="hover:cursor-pointer rounded-md bg-white py-2 px-4 my-3 border border-transparent text-center text-sm text-red-800 hover:text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        Edit Profile
                    </button>
                    <button className="hover:cursor-pointer rounded-md bg-red-600 py-2 px-4 my-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        Logout
                    </button>
                </div>    
            </div>
        </div>
    )
}

export default Account;