import React from 'react'

function About() {
  return (
   <>
   <div className='aboutframe'>
   <h1 style={{marginLeft:"20px",color:"rgb(239,124,0)",}}>About US</h1>
   <div className='aboutdiv'>
    <div className='aboutsub'>
<h2 style={{marginTop:"10px"}}>History</h2>
<p className='About_p'>Coporate Bank was originally promoted in 1994 by ICICI Limited, an 
  Indian financial institution, and was its wholly-owned subsidiary.</p>
  <button  className='about_btn'>KNOW MORE</button>

    </div>
    <div className='aboutsub'>
    <h2 style={{marginTop:"10px"}}>Coporate Group Companies</h2>
<p className='About_p'>Coporate Bank offers a wide range of banking products and financial services to corporate and 
retail customers through a variety of delivery channels and through its group companies..</p>
  <button className='about_btn'>KNOW MORE</button>
    </div>
   </div>
   <div className='aboutdiv'>
    <div className='aboutsub'>
    <h2 style={{marginTop:"10px"}}>Board of Directors</h2>
<p className='About_p'>Coporate Bank's Board members include eminent individuals with a wealth of
 experience in international business, management consulting, banking and financial services.</p>
  <button className='about_btn'>KNOW MORE</button>
    </div>
    <div className='aboutsub'>   <h2 style={{marginTop:"10px"}}>Investor Relation</h2>
<p className='About_p'>All the latest, in-depth information about
 Coporate Bank's financial performance and business initiatives.</p>
  <button className='about_btn'>KNOW MORE</button></div>
   </div>
   <div className='aboutdiv'>
   <div className='aboutsub'>   <h2 style={{marginTop:"10px"}}>Notice Board</h2>
<p className='About_p'>Catch up with Coporate Bank's latest communication related to Acknowledgements, 
information on regulatory notices, banking ombudsman schemes and others.</p>
  <button className='about_btn'>KNOW MORE</button></div>
    <div className='aboutsub'>
    <h2 style={{marginTop:"10px"}}>Corporate Social Responsibility</h2>
<p className='About_p'>corporate Bank is deeply engaged in human and economic development at the
 national level. The Bank works closely with ICICI Foundation across diverse sectors and programs.</p>
  <button className='about_btn'>KNOW MORE</button>
    </div>
   </div>
   </div>
   </>
  )
}

export default About
