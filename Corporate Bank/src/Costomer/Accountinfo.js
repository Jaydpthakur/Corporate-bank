import axios from 'axios'
import React, { useEffect, useState } from 'react'
let cus_id=localStorage.getItem("cusid")
function Accountinfo() {
  const[data,setData]=useState([])
  const loadData=()=>{
    let url=`http://localhost:4000/costomer/${cus_id}`
    axios.get(url).then((res)=>{

      setData(res.data)
      console.log(res.data)
      console.log((res.data).name)
    })

  }
  useEffect(()=>{
    loadData()
  },[])

  return (
<>
<div id='registeration' style={{  width:"70%" ,height:"250px",margin:"auto"   ,marginTop:"35px"}}>
<h1 style={{color:"black"}}> Account Information </h1>
<table style={{width:"100%",color:"white",fontSize:"17px",fontWeight:"bold", lineHeight:"2"}}>
  <tr>
    <td>Bank Name : </td>
    <td>Corporate Bank</td>
    </tr>
  <tr>
  <td> Customer Name  : </td>
  <td>{(data).name}</td>
  </tr>
  <tr>
    <td>Account Number : </td>
    <td>78634{(data).id}</td>
    </tr>
    <tr>
    <td>IFSC Code : </td>
    <td>COP893384</td>
    </tr>
    <tr>
      <td>Branch :</td>
      <td>M P Nagar Zone-I Bhopal </td>
    </tr>
</table>

</div>

</>
  )
}

export default Accountinfo
