import React from 'react'
import b1 from './b1.jpg'
import b2 from './b2.jpg'
import b3 from './b3.jpg'
import b4 from './b4.jpg'
import b5 from './b5.jpg'

function Vlog() {
  return (
  
    
    <>
   <div id='blogframe'>
<div className='blogsub'>
  <div className='blogimgdiv'>
<img src={b1} style={{width:"100%",height:"240px" ,borderRadius:"10px"}}></img>
</div>
<div className='blogcontent'>
<h2 style={{color:"#c5a562",marginTop:"10px"}}>Pragatishil Palghar</h2>
<p id='blogp'>Grow & Help Grow
Skilling and Uplifting the Inhabitants of Palghar
SBM Bank India has signed an MOU with Sri Chaitanya Seva Trust Govard...</p>
<p id='blogbtn'>Click here</p>
</div>
</div>



<div className='blogsub'>
  <div className='blogimgdiv'>
<img src={b2} style={{width:"100%",height:"240px" ,borderRadius:"10px"}}></img>
</div>
<div className='blogcontent'>
<h2 style={{color:"#c5a562",marginTop:"10px"}}>Childs Education Aboard</h2>
<p id='blogp'>Parents always seek the best for their children. Providing them with the best of
 education in the stream of their choice happens to be one of their to...</p>
<p id='blogbtn'>Click here</p>
</div>
</div>
 


<div className='blogsub'>
  <div className='blogimgdiv'>
<img src={b3} style={{width:"100%",height:"240px" ,borderRadius:"10px"}}></img>
</div>
<div className='blogcontent'>
<h2 style={{color:"#c5a562",marginTop:"10px"}}>Home Loan</h2>
<p id='blogp'>At 18 million, the Indian Diaspora is the largest in the world. Many
 NRIs wish and intend to own a place in India, they can call Home. However, there ...</p>
<p id='blogbtn'>Click here</p>
</div>
</div>



<div className='blogsub'>
  <div className='blogimgdiv'>
<img src={b4} style={{width:"100%",height:"240px" ,borderRadius:"10px"}}></img>
</div>
<div className='blogcontent'>
<h2 style={{color:"#c5a562",marginTop:"10px"}}>How to master hack-free online banking</h2>
<p id='blogp'>In today's fast-pace world, the traditional way of doing banking transactions is 
fast becoming a thing of the past. Thanks to faster internet speed co...</p>
<p id='blogbtn'>Click here</p>
</div>
</div>




<div className='blogsub'>
  <div className='blogimgdiv'>
<img src={b5} style={{width:"100%",height:"240px" ,borderRadius:"10px"}}></img>
</div>
<div className='blogcontent'>
<h2 style={{color:"#c5a562",marginTop:"10px"}}>Opportunities for overseas investments</h2>
<p id='blogp'>India offers a wide range of promising investment options to all categories of 
investors. However, one can always choose to broaden their horizons and...</p>
<p id='blogbtn'>Click here</p>
</div>
</div>


   </div>

    
    </>
  )
}

export default Vlog
