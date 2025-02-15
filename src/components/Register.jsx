import Logo from '../assets/Logo.png'
import IlustrasiLogin from '../assets/Illustrasi Login.png'

function Register() {
 return (
    <div className='grid grid-cols-2'>
      <div className="registerForm w-3xs">
         <img src={Logo} alt="logo" />SIMS PPOB
         <input type="email" name="email" id="email" placeholder="Masukkan E-mail Anda" required/>
         <input type="text" name="namaDepan" id="namaDepan" placeholder="Nama Depan" required/>
         <input type="text" name="namaBelakang" id="namaBelakang" placeholder="Nama Belakang" required/>
         <input type="password" name="buatPass" id="buatPass" placeholder="Buat Password" required/>
         <input type="password" name="konfirmPass" id="konfirmPass" placeholder="Konfirmasi Password" required/>
         <button className="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
         Registrasi
         </button>
         <p className="text-sm">Sudah punya akun? Login <a href="">di sini</a></p>
      </div>
      <div className='logo'>
          <img src={IlustrasiLogin} alt="Ilustrasi Login" />
      </div>
    </div>
 )   
}

export default Register;