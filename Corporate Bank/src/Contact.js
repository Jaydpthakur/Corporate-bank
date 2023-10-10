import React from 'react'

function Contact() {
  return (
    <>
    <div>
      <h2 style={{marginLeft:"100px",fontFamily:"sans-serif",marginBottom:"10px"}}> Contact Us</h2>
    <div id='newformlayout'>
<div id="newform">
  
  
  
  <input type="text" id="username" class="transparent-input" name="username" placeholder="Name"/>
  
  <input type="text" id="password" class="transparent-input" name="password" placeholder="Number"/>

  <input type="email" id="E" class="transparent-input" name="password" placeholder="Email"/><br/><br/>
  <center>
 <textarea  placeholder="Messsage"></textarea>
</center>
<h5 id="btns">Submit Now</h5>
</div>

</div>
    </div>
    </>
  )
}

export default Contact
