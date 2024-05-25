'use client'

import {ChangeEvent, useState} from "react"

function FormLogin () {
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    })

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value,
        });
    }

    function handleLogin(e:any) {
        e.preventDefault();
        console.log(userLogin);
    }

    return (
        <div className="flex flex-col mt-4 items-center gap-2 rounded-md bg-[#4FC0D0] justify-center p-5 ">
            <h2 className="font-bold text-2xl">Login</h2>
            <form action="" className="flex flex-col gap-2">
            <h3>Email</h3>
            <input type="email" placeholder="email" value={userLogin.email} onChange={handleChange} />
            <h3>Password</h3>
            <input type="password" placeholder="password" value={userLogin.password} onChange={handleChange}/>
           <button onClick={handleLogin} className="bg-[#1b1a1a] text-white font-bold text-sm rounded-md shadow-md p-3">Login</button>
            </form>
        </div>
    )
}


export default FormLogin;