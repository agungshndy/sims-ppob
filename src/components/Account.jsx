import Logo from '../assets/Logo.png'
import Profile from '../assets/Profile Photo.png'

function Account(){
    return (
        <div id='account' className='container mx-auto'>
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
            <div className='flex justify-center'>
                <div className='grid grid-rows-2'>    
                    <img className='w-[100px]' src={Profile} alt="profile picture" />        
                    <p className='text-xl font-semibold'>Kristanto Wibowo</p>
                </div>
            </div>
        </div>
    )
}

export default Account;