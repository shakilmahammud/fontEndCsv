import React, { useState } from 'react'
import { useHistory } from 'react-router'

export const Login = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const history=useHistory()

    const handleLoginMacth=()=>{
        fetch('http://localhost:40001/loginMatch?email='+email)
        .then(res=>{
            if(res.status==200){
                res.json()
                .then(result=>{
                    if(result[0]?.email){
                        history.replace('/agentcsv')
                        localStorage.setItem("email",email)
                    }else{
                        history.replace('/')
                    }
                })
            }
        })
        
    }
    return (
        <section>
            <div className="container">
                <div className="row">
                <div className="col-md-8" >
                      <div style={{width:"80%",padding:"5px"}}>
                            <h3 style={{background:"#000",color:"#fff",textAlign:"center" ,padding:"10px",marginBottom:"10px",marginTop:"30px"}}>Login Agent</h3>
                        </div>
                        <div>
                            <input type="email" required style={{width:"80%",padding:"5px"}} placeholder="please Enter Your Email" onChange={e=>setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input type="password" required style={{width:"80%",marginTop:"20px",padding:" 5px"}} placeholder="please Enter Password Password" onChange={e=>setPassword(e.target.value)}/>
                        </div>
                        <div style={{width:"80%",cursor:"pointer"}} onClick={handleLoginMacth}>
                            <h3 style={{background:"#000",color:"#fff",textAlign:"center" ,padding:"10px",marginBottom:"10px",marginTop:"30px"}}  >Login</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
