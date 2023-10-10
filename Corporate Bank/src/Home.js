
import axios from 'axios'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Home() {
    const Navigate=useNavigate()
    const[input ,setdata]=useState({})
    
    const handle=(e)=>{

        let name=e.target.name
        let value=e.target.value
        setdata(values=>({...values,[name]:value}))
    }
    
    const handlesubmit=()=>{

     
        
        let url="http://localhost:4000/costomer"
        axios.post(url,input).then((res)=>{
            Navigate("/login")
            
        })

    }
  return (
    <>
  
  <diV id="content">
    <div id='registeration'>
        <p id='err'></p>
    <h1 id='ahead'>Start Saving Account</h1>
    <input className='redone'  placeholder='Name'value={input.name} name='name' onChange={handle} type='text'></input><br></br>
    <input className='redone' placeholder='Number'value={input.number} onChange={handle} name='number' type='text'></input><br></br>
    <input className='redone' placeholder='Email'value={input.email} onChange={handle} name='email' type='email'></input><br></br>
    <input  className='redone'placeholder='Password'name='password'value={input.password}onChange={handle}  type='password'></input><br></br>
  <center>  <button id='abtn' onClick={handlesubmit}>  Get Started</button></center>
 <center><p id='member'>Already a member?<span  id='link'> <Link to="/login" >Log in</Link></span></p></center> 
  </div>
  <div id='processing'>
  <h1 id='ahead'>Account Processing Step</h1>
  <p>The applicant will need to come to the branch, in person, for opening the account and will sign at the relevant places in the presence of a Bank Official. Accounts can also be opened digitally though YONO app. Accounts can be opened using Video customer Identification Process where there is no need to visit Branch.</p>
 <ol type='i'>
  <li>Choose 'The Right Banking Partner‍ ...</li>
  <li>Visit the Bank or go to their Website/ App‍ ..</li>
  <li>Fill out the Application Form‍ ...</li>
  <li>Submit the Necessary Paperwork ‍ ...</li>
  <li>Complete KYC Process‍ ...</li>
  <li>Complete KYC Process‍ ...</li>
 </ol>
  </div>

   
  </diV>
   
    </>
  )
}

export default Home
