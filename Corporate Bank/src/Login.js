import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const mynavigation=useNavigate() 

  const handlesubmit=()=>{
    let url=`http://localhost:4000/costomer?email=${email}`
    axios.get(url).then((res)=>{
if(res.data.length===0){
    document.getElementById("err").innerHTML="invalid email"
}
else
{
    if(res.data[0].password===password){
     
        localStorage.setItem("cusname",res.data[0].name)
        localStorage.setItem("cusemail",res.data[0].email)
        localStorage.setItem("cusid",res.data[0].id)
        document.getElementById('navlog').style.display="block"
        mynavigation("/coustomerdash/")
    }
    else{
        document.getElementById("err").innerHTML="invlaid pass"
    }
}
    
    })


  }
  return (
    <> 
    <div id='logindiv'> 
<center>
<div>
    <div id='registeration' style={{height:"280px"}}>
        <p id='err'></p>
    <h1 id='ahead'>Log in</h1>

 
    <input className='redone' placeholder='Email'  value={email} name='email' onChange={(e)=>{setemail(e.target.value)}} type='email'></input><br></br>
    <input  className='redone'placeholder='Password'name='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} type='password'></input><br></br>
  <center>  <button id='abtn' onClick={handlesubmit} >Log in</button></center>
  <p id='member'>Not registered ?<span  id='link'><Link to="/home" > sign up</Link></span></p>
  </div>
    </div>
    </center>
    </div> 
    </>

  )
}

export default Login
