import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
let cus_id=localStorage.getItem("cusid")
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const submitDate = dd + '/' + mm + '/' + yyyy;

function Submitmoney() {
  const[Amount,SetAmount]=useState(0)
  const mynavigatione=useNavigate()
  const handlesubmit=()=>{
let url="http://localhost:4000/account"
const mydata={
  "cus_id": cus_id,
  "submit_amount": Amount,
  "date": submitDate,
  "withdraw_amount":0
}

axios.post(url,mydata).then((res)=>{
  const popup = document.getElementById("popup");
popup.style.display = 'block';

})
}
function closediv(){
  const popup = document.getElementById("popup");
  popup.style.display = 'none';

}
function check(){
  mynavigatione("/coustomerdash/checkblance")
}






  
  return (
    <>

      
      <div id='registeration' style={{height:"250px",margin:"auto" ,marginTop:"35px"}}>
        <h1 id="ahead">Submit Money in Your Account</h1>
      <input className='redone'  placeholder='Amount'value={Amount.Amount} name='Amount' onChange={(e)=>{SetAmount(e.target.value)}} type='text'></input><br></br>
      <center>  <button id='abtn' onClick={handlesubmit}>Submit</button></center>
</div>




    <div id="popup">
        <div class="popup-container">
            <div class="popup">
                <div class="close-popup" onClick={closediv} id="closeBtn"><a href="#">X</a></div>
                <h2>Message</h2>
                <p>
                Your Amount Succesfully Submited!!!
                </p>
              <a class="popup-btn" onClick={check}>  View Details</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Submitmoney
