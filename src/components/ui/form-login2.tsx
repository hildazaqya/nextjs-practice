'use client'

import {ChangeEvent, useState} from "react"
// ChangeEvent digunakan untuk menangani perubahan dalam input
// useState digunakan untuk membuat state dalam komponen

// function FormLogin adalah komponen React yg akan mengembalikan elemen JSX
// yang akan dirender dilayar

function FormLogin () {
    const [userLogin, setUserLogin] = useState({
        // inisialisasi dgn string kosong
        email: "",
        password: "",
    })

    // function handleChange akan dipanggil saat terjadi perubahan dalam input
    // function ini menerima parameter event dari perubahan input
    // ChangeEvent<HTMLInputElement> adalah tipe event dan element yang diubah
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        // e.target adalah elemen yg memicu adanya perubahan serta mengambil name dan value
        const { name, value } = e.target;
        // ...userLogin adalah spread operator yg digunakan untuk menyalin semua properti dari state sebelumnya
        setUserLogin({
          ...userLogin,
          [name]: value,
        });
      }

    //   fungsi handleLogin adalah fungsi yang akan dipanggil saat tombol login ditekan. 
    // tipe 'any' pada 'e' digunakan karena kita tidak secara eksplisit mengambil properti tertentu dari event ini
    function handleLogin(e:any) {
        e.preventDefault();
        console.log(userLogin);
    }

    return (
        <div className="flex flex-col mt-4 items-center gap-2 rounded-md bg-[#4FC0D0] justify-center p-5 ">
            <h2 className="font-bold text-2xl">Login</h2>
            <form action="" className="flex flex-col gap-2">
            <h3>Email</h3>
            <input type="email" name="email" placeholder="email" value={userLogin.email} onChange={handleChange} />
            <h3>Password</h3>
            <input type="password"  name="password" placeholder="password" value={userLogin.password} onChange={handleChange}/>
           <button onClick={handleLogin} className="bg-[#1b1a1a] text-white font-bold text-sm rounded-md shadow-md p-3">Login</button>
            </form>
        </div>
    )
}


export default FormLogin;