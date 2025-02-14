 function Register() {
 return (
    <div>
      <div className="registerForm">
         <input type="email" name="email" id="email" placeholder="Masukkan E-mail Anda" required/>
         <input type="text" name="namaDepan" id="namaDepan" placeholder="Nama Depan" required/>
         <input type="text" name="namaBelakang" id="namaBelakang" placeholder="Nama Belakang" required/>
         <input type="password" name="buatPass" id="buatPass" placeholder="Buat Password" required/>
         <input type="password" name="konfirmPass" id="konfirmPass" placeholder="Konfirmasi Password" required/>
         <input className="btn btn-blue" type="button" value="Registrasi" />
         <button type="submit">Registrasi</button>
      </div>
    </div>
 )   
}

export default Register;