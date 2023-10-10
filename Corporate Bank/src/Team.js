import React from 'react'
import pro from './pro.jpg'
import team from './team.png'

function Team() {
  return (
    <>
    <div className='teamframe'>
      <h2 style={{textAlign:"center",fontFamily:"Arial"}}>Life at Corporate Bank</h2>
      <div id='proffesion'>
        <img src={pro} id='proimg'></img>
        < h4 style={{textAlign:"center",fontFamily:"Arial",marginTop:"10px"}}> Professionalism</h4>
        
       <p className='propara'> We believe in building a workforce guided by our purpose of inclusive banking and
         holistic development. In everything that we do, 
        we aim to touch the lives of our customers,
         stakeholders and our valuable employees. 
    So, here is your chance to make a difference, to learn every day
 and to work with the most diverse and talented people in the industry.  
 Whether you are looking for a first job or taking the next step in your career, join our
  quest for value creation and meet your career goals. </p> 
              
      </div>
      <div className='myteam'>
        <div className='join'>
       <center> <h2  style={{fontFamily:"Arial",marginTop:"20px"}}>Join Our Team</h2></center>
       <p id='joinp'>People are our assets and our strength. We are committed to our employees and their progress. 
        What you will get at Bandhan Bank is a unique combination of your own career growth along with numerous
         opportunities to help our nation grow. If you think like us, then submit your candidature.</p>
        <center> <button id='joinbtn'>Join us now</button></center>
        <img src={team} id='teamimg'></img>

        </div>
      </div>
    </div>
    </>
  )
}

export default Team
