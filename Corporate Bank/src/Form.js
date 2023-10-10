import React from 'react'

function Form() {
  return (
   <>
  <diV id="content">
    <div id='registeration'>
    <h1 id='ahead'>Start Saving Account</h1>
    <input className='redone' placeholder='Name' type='text'></input><br></br>
    <input className='redone' placeholder='Number' type='text'></input><br></br>
    <input className='redone' placeholder='Email' type='email'></input><br></br>
    <input  className='redone'placeholder='Password' type='password'></input><br></br>
  <center>  <button id='abtn'>  Get Started</button></center>
  </div>
  <div id='processing'>
  <h1 id='ahead'>Account processing step</h1>
  <p>The applicantwill need to come to the branch, in person, for opening the account and will sign at the relevant places in the presence of a Bank Official. Accounts can also be opened digitally though YONO app. Accounts can be opened using Video customer Identification Process where there is no need to visit Branch.</p>
 <ol type='i'>
  <li>Choose 'The Right Banking Partner‍' ...</li>
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

export default Form
