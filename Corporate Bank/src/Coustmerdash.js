import React from 'react'
import newimg from "./dash.jpg"
import { Link, Outlet, useNavigate } from 'react-router-dom'
let cusname=localStorage.getItem("cusname")
let cusemail=localStorage.getItem("cusemail")





function Coustmerdash() {
    const mynavigation=useNavigate()
    const userlogout=()=>{
        localStorage.clear()
        document.getElementById('navlog').style.display="none"
        mynavigation("/home")
    }
  return (
   <>
   <div id='dash-design'>
    <div id='dashlog' ><img src={newimg} id='dashimg'></img></div>
   <div id='dash'>
    <h1 style={{color:"white"}} >welcome {cusname} </h1>
    <p style={{color:"white", fontSize:"18px"}}>{cusemail}</p>
    <p style={{color:"white",marginTop:"10px", fontSize:"15px"}} >We deeply value your trust in us. Thank you for being a cherished member of our banking family..</p>

   <button id='abtn' onClick={userlogout}>Logout</button>

   

   </div>
   
   </div>
   <div id="cosarea">
    <div id='coslefMEnu'>
      <ul id='newul'>
        <li><Link  to="accountinfo" className='coslink'>Account Info</Link></li>
        <li><Link to="mini" className='coslink'>Mini Statements</Link></li>
        <li><Link to="checkblance" className='coslink'>Check Balance</Link></li>
        <li><Link to="submitmoney" className='coslink'>Submit Money</Link></li>
        <li><Link to="withdralmoney" className='coslink'>Withdraw Money</Link></li>
        <li> <Link to="changepass" className='coslink'>Change Password</Link></li>
      </ul>
    </div>
    <div className='cosdata'>
      <Outlet/>
    </div>
   </div>
   </>
  )
}

export default Coustmerdash
