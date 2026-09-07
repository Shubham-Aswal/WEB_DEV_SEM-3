import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import './App.css'
import "./Login.css"

const Login = () => {
    const [email,setemail] = useState("");
    const [password,setpass] = useState("");
    async function loginUser(){
        let data ={
            passWord : password,
            email : email
        }
        setemail("");
        setpass("")
        let ress = axios.post("http://localhost:3000/login",data)
        if(ress.status == 200){
            alert("user login success..")
        }

    }
  return (
        <main className="auth-page login-page">
            <section className="auth-card" aria-labelledby="login-title">
                <p className="eyebrow">Welcome back</p>
                <h1 id="login-title">Good to see you.</h1>
                <p className="intro">Sign in to continue where you left off.</p>
                <div className="auth-form">
                    <label className="form-field">
                        <span>Email address</span>
                        <input type="email" value={email} placeholder="you@example.com" onChange={(e) => setemail(e.target.value)} />
                    </label>
                    <label className="form-field">
                        <span>Password</span>
                        <input type="password" value={password} placeholder="Enter your password" onChange={(e) => setpass(e.target.value)} />
                    </label>
                    <button type="button" onClick={loginUser}>Sign in <span>→</span></button>
                </div>
                <p className="form-note">Use the account you created to sign in.</p>
            </section>
        </main>
  )
}

export default Login
