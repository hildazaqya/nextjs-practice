'use client'

import {useState} from "react"

function FormLogin () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleEmail(e: any) {
        setEmail(e.target.value)
    }

    function handlePassword(e: any) {
        setPassword(e.target.value)
    }


    function handleLogin(e: any) {
        e.preventDefault()
        console.log(email);
        console.log(password);
    }

    return (
        <div className="flex flex-row items-center justify-center p-5 ">
            <form action="">
            <input type="email" placeholder="email" value={email} onChange={handleEmail} />
            <input type="password" placeholder="password" value={password} onChange={handlePassword}/>
           <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}


export default FormLogin;