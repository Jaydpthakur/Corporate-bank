import React from 'react'
import lg from "./logout.png"
import { Outlet ,Link} from 'react-router-dom'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'


function Layout() {
  const mynavigation=useNavigate()
  const userlogout=()=>{
      localStorage.clear()
      document.getElementById('navlog').style.display="none"
      mynavigation("/home")
  }
  return (
    <>

    <div id='container'>
        <div id='topheader'>

            <div id='contactNo'>
            <i class="fa fa-phone" aria-hidden="true"></i> &nbsp;7999326675

            </div>
            <div id='righticons'>
            <i class="fa-brands fa-twitter space" ></i>
            <i class="fa-brands fa-instagram space"></i>
            <i class="fa-brands fa-google space"></i>
            <i class="fa-brands fa-facebook space"></i>
            <input type='text'></input>
            <i class="fa-solid fa-magnifying-glass search"></i>
         

</div>
        </div>
        <div id='topmenu'>
<ul>
    <li><a href='#'><Link to="home">Home</Link></a></li>
    <li><a href='#'><Link to="about">About</Link></a></li>  
    <li><a href='#'>
    <Link to="service">Services</Link></a></li>
    <li><a href='#'><Link to="team">Team</Link></a></li>
    
    <li><a href='#'><Link to="vlog">Blog</Link></a></li>
    <li><a href='#'><Link to="contact">Contact</Link></a></li>
<a href='#' id='navlog' onClick={userlogout}><img src={lg} id='logimg' style={{width:"20px",height:"20px"}}></img></a>
   

</ul>

        </div>
    <div id='banklog'>
        <span id="logo1">Corporate </span>
        <span id="logo2">Bank</span>
    </div>


<diV id="mydata" >
  <Outlet/>
</diV>




<div id='foot'>
<Footer/>
</div>


    </div>
    
    </>
  )
}

export default Layout
