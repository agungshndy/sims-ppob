import Logo from '../assets/Logo.png'
import Profile from '../assets/Profile Photo.png'
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';

function EditProfile(){

    const navigate = useNavigate()
    const { user,setUser } = useContext(UserContext);

    const [formData, setFormData] = useState({
        id : user?.id || '',
        email : user?.email || '',
        firstname : user?.firstname || '',
        lastname : user?.lastname || ''
    });

    const handleChange = (e)=> {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async ()=> {
        try {
            const API_URL = `http://localhost:8000/users/${formData.id}`

            if (!formData.id) {
                alert("User ID is missing!");
                return;
            }

            const response = await axios.put(API_URL, formData);

            if (response.status === 200) {
                setUser(formData);
                localStorage.setItem('user', JSON.stringify(formData));
                alert("Profile berhasil diperbarui!");
                navigate('/account');
            }
        } catch (error) {
            console.error("Gagal memperbarui profil!", error)
            alert("Gagal memperbarui profil!");
        }
    }

    return (
        <div id='edit-profile' className='container mx-auto'>
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
                      {user ? `${formData.firstname} ${formData.lastname}` : 'Guest'}
                    </p>
                </div>
            </div>
            <div className='account-detail'>
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <div className='rounded border-1 p-2 mt-2'>
                        <input className='w-full' type="email" name="email" id="email" value={formData.email} onChange={handleChange}/>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor="namaDepan">Nama Depan</label>
                    <div className='rounded border-1 p-2 mt-2'>
                        <input className='w-full' type="text" name="firstname" id="namaDepan" value={formData.firstname} onChange={handleChange}/>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor="namaBelakang">Nama Belakang</label>
                    <div className='rounded border-1 p-2 mt-2'>
                        <input className='w-full' type="text" name="lastname" id="namaBelakang" value={formData.lastname} onChange={handleChange}/>
                    </div>
                </div>
                <div className='grid grid-cols-1 my-2'>
                    <button 
                        className="hover:cursor-pointer rounded-md bg-red-600 py-2 px-4 my-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
                        type="button"
                        onClick={()=> navigate('/account')}
                    >
                        Batalkan
                    </button>
                    <button 
                        className="hover:cursor-pointer rounded-md bg-red-600 py-2 px-4 my-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
                        type="button"
                        onClick={handleSubmit}
                    >
                        Simpan
                    </button>
                </div>    
            </div>
        </div>
    )
}

export default EditProfile;