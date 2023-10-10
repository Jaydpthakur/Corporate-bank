import { useState, useEffect } from "react";
import axios from "axios";
import MiniStatementView from "./MiniStatementView";
let cus_id=localStorage.getItem("cusid")
const MiniStatements=()=>
{
    const [data, setData]=useState([]);
    const loadData=()=>
    {
        let url=`http://localhost:4000/account/?cus_id=${cus_id}`;
        axios.get(url).then((res)=>{
            setData(res.data);
            console.log(res.data)
            console.log(cus_id)
        });
    }
   useEffect(()=>{
        loadData();
    }, []);

    var totalBalance=0;
    var totalSubmitAmt=0;
    var totalWithdrawAmt=0;
    const myData=data.map((key)=>{
        totalSubmitAmt+=parseInt(key.submit_amount);
        totalWithdrawAmt+=parseInt(key.withdraw_amount);
     return(
    <>
     
    <MiniStatementView 
    trnDate={key.date}  
    subAmt={ key.submit_amount==0 ? "-" : key.submit_amount}
    withdrawAmt={key.withdraw_amount==0? "-":key.withdraw_amount }
    
    />
    </>
);

    });
    totalBalance=totalSubmitAmt-totalWithdrawAmt;
    return(
 <>
 
 <h1 style={{textAlign:"center"}}> Mini Statements</h1>
<div className="cosdata"  style={{ overflowY: 'scroll',width:"100%",height:"300px"}}>
 <center>
 <table id="mt"   align="center" style={{width:"96%", maxHeight: '300px',borderCollapse:  "collapse", border: "1px solid black", padding:"20px", fontFamily:"verdana", fontSize:"13px", fontWeight:"bold", color:"navy"}}>
    <tr bgcolor="orange" style={{color:'white',fontSize:"14px", fontWeight:"bold",position:"sticky"}}>
        <th style={{height:"30px"}}>Transaction Date </th>
        <th>Debit </th>
        <th>Credit </th>
    </tr> 
 {myData}
 </table>
 </center>
 </div>
  <h3 style={{padding:"20px"}}> Net Balanace:  {totalBalance} </h3> 

 </>
   );
}
export default MiniStatements;