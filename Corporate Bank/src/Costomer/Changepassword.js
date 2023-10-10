import axios from 'axios'
import React, { useState } from 'react'



let cus_id=localStorage.getItem("cusid")

function Changepassword() {
  const[input,setInput]=useState([])

  
  const handle=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setInput(values=>({...values,[name]:value}))
    console.log(input)
  }
  const hadlesubmit=()=>{
    let url=`http://localhost:4000/costomer/${cus_id}`
    axios.get(url).then((res)=>{
      setInput(res.data)
      console.log(res.data.password)// this for debbing
      let oldpass=res.data.password
      let name=res.data.name
      let number=res.data.number
      let email=res.data.email
      console.log(oldpass)


      if(input.old==oldpass){

      

          if(input.new==input.Renew){
            axios.put(url
              ,{name:name,
                number:number,
                email:email,
                password:input.Renew
    
              }
              ).then((res)=>{
              
                const popup = document.getElementById("popup");
                popup.style.display = 'block';
              
              })

          }
          else{
            document.getElementById('err').innerHTML="password doesn't match"

          }

      }
      else{
        document.getElementById('err').innerHTML="Invailid Password"
      }
    })
  }
/// tthis is alert messagae
  function closediv(){
    const popup = document.getElementById("popup");
    popup.style.display = 'none';

    // this empty input after chnage pass
    window.location.reload();

  }

  return (
    <> 
   
    <center>
    <div>
        <div id='registeration' style={{height:"280px",marginTop:"20px"}}>
            <p id='err'></p>
        <h1 id='ahead'>Change Password</h1>
    
        <input  className='redone'placeholder='Old Password' name='old' value={input.old}   type='password'  onChange={handle}></input><br></br>
        <input  className='redone'placeholder='New Password' name='new' value={input.new}   type='password'  onChange={handle}></input><br></br>

       
        <input  className='redone'placeholder='Re New Password' name='Renew' value={input.Renew}   type='password'  onChange={handle}></input><br></br>
      <center>  <button id='abtn' onClick={hadlesubmit} >Reset</button></center>
     
      </div>
        </div>
        </center>

        <div id="popup">
        <div class="popup-container">
            <div class="popup">
                <div class="close-popup" onClick={closediv} id="closeBtn"><a href="#">X</a></div>
                <h2>Message</h2>
                <p>
                your password has been changed message!!!
                </p>
      
            </div>
        </div>
    </div>
       
        </>
    
  )
}

export default Changepassword
