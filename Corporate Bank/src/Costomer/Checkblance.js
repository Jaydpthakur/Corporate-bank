import axios from 'axios'
import React, { useEffect, useState } from 'react'

let cus_id=localStorage.getItem("cusid")
const Checkblance=()=> {
    const[data,setdata]=useState([])
    const loaddata=()=>{
        let url=`http://localhost:4000/account/?cus_id=${cus_id}`
        axios.get(url).then((res)=>{
            setdata(res.data)
            console.log(cus_id)
            console.log(res.data)
        })
    }
     
        useEffect(()=>{
            loaddata()
        },[])
        let totalCredit=0;
        let totalDebit=0;
        data.map((key)=>{
                      
              totalCredit+=parseInt(key.submit_amount);
              
              totalDebit+=parseInt(key.withdraw_amount);
                  
              
            });
            console.log(totalCredit) //this is for debuging
            console.log(totalDebit)

         let netAmount=totalCredit-totalDebit;

       
      

    
  return (
    <>
    <div id='registeration' style={{  width:"70%" ,height:"250px",margin:"auto"   ,marginTop:"35px"}}>

<h1 style={{marginTop:"20px",color:"white"}}> Bank Balance Of Customer {cus_id}</h1>  
          <h2> Total Balance: {netAmount} </h2>
          </div>
          
          </>
  )
}

export default Checkblance
