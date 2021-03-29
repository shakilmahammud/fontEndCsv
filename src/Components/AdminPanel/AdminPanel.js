import React, { useEffect, useState } from 'react'
import { CSVLink, CSVDownload } from "react-csv"

export const AdminPanel = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [dwonloadCsv,setDwonloadCsv]=useState([])
    
     useEffect(()=>{
             fetch('https://jsoncovert.herokuapp.com/dwonloadCsv')
             .then(res=>res.json())
             .then(result=>{
                 setDwonloadCsv(result)
             }).catch(err=>{
                 console.log(err)
             })
      
     },[])
    const handleLogin = () => {
        fetch(`https://jsoncovert.herokuapp.com/login`,{
                    method:"POST",
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                      },
                      body: JSON.stringify({"email":email,"password":password,})
                })
                .then(res=>res.json())
                .then(result=>{
                    console.log(result)
                    alert('Agent Create Done')
                })
    }
  
    
    return (
        <section>
            <div className="container">
            <h2 style={{background:"#000",color:"#fff",textAlign:"center"}}>Admin Panel</h2>
                <div className="row">
                    <div className="col-md-8">
               
                        <div>
                            <h3 style={{background:"#000",color:"#fff",textAlign:"center" ,padding:"10px",marginBottom:"20px"}}>Upload Section</h3>
                        </div>
                        <form
                          action="https://jsoncovert.herokuapp.com/upload"
                           method="POST"
                        enctype="multipart/form-data"
                         >
                        <div>
                            <input type="file" name="avatar"/>
                              <input type="submit" value="Upload File" style={{background:"#000",color:"#fff",}}/>
                        </div>
                        </form>
                        <div>
                            <h3 style={{background:"#000",color:"#fff",textAlign:"center" ,padding:"10px",marginBottom:"10px",marginTop:"30px"}}>Report Section</h3>
                            
                        </div>
                        <div style={{width:"50%",cursor:"pointer"}} >
                        {
                      dwonloadCsv.length>0?<CSVLink data={dwonloadCsv} >   <h3 style={{background:"#000",color:"#fff",textAlign:"center" ,padding:"10px",marginBottom:"10px",marginTop:"30px"}}>Dwonload Excle</h3></CSVLink>
                      :<h4>Data Loaded.......</h4>
                  }
                        </div>
                    </div>
                    <div className="col-md-4">
                      <div>
                            <h3 style={{background:"#000",color:"#fff",textAlign:"center" ,padding:"10px",marginBottom:"10px",marginTop:"30px"}}>Create New Agent</h3>
                        </div>
                        <div>
                            <input type="email" required style={{width:"80%",padding:"5px"}} placeholder="please Enter Agent Email" onChange={e=>setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input type="password" required style={{width:"80%",marginTop:"20px",padding:" 5px"}} placeholder="please Enter Agent Password" onChange={e=>setPassword(e.target.value)}/>
                        </div>
                        <div style={{width:"80%",cursor:"pointer"}} onClick={handleLogin}>
                           
                  <h3 style={{background:"#000",color:"#fff",textAlign:"center" ,padding:"10px",marginBottom:"10px",marginTop:"30px"}} >Create Agent</h3>
                   
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
