import React from 'react'
import { useState } from 'react';
import axios from 'axios'

const Signup = () => {
  let [data,SetData]=  useState({
  name:"",
  email:"",
  passWord:""
   })


function fun1(e){
  console.log(e.target);
  let {name,value}=    e.target
  SetData({...data,[name]:value})
  console.log(data,"datata");
  
  

}

  async function done(){
    try {
      const apiR = await axios.post("http://localhost:3000/signup", data)
      if(apiR.status === 200){
        alert("user registered successfully")
      }
    } catch (error) {
      alert(error.response?.data || "Signup failed")
    }
  }
  






  return (
    <main className="auth-page signup">
      <section className="auth-card signup-card" aria-labelledby="signup-title">
        <p className="eyebrow">Create your account</p>
        <h1 id="signup-title">Join the room.</h1>
        <p className="intro">Set up your details and get started in a few seconds.</p>
        <div className="auth-form">
          <label className="form-field">
            <span>Full name</span>
            <input name="name" value={data.name} placeholder="Enter your name" onChange={fun1} />
          </label>
          <label className="form-field">
            <span>Email address</span>
            <input name="email" value={data.email} placeholder="you@example.com" type="email" onChange={fun1} />
          </label>
          <label className="form-field">
            <span>Password</span>
            <input name="passWord" value={data.passWord} placeholder="Choose a password" type="password" onChange={fun1} />
          </label>
          <button type="button" onClick={done}>Create account <span>→</span></button>
        </div>
        <p className="form-note">Your details are encrypted and kept private.</p>
      </section>
    </main>
  )
}

export default Signup
