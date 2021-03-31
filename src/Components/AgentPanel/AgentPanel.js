import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './AgentPanel.css'

export const AgentPanel = () => {
 const [allCsv,setAllCsv]=useState({})
const[totalCount,setTotalCount]=useState([])
 const [search,setSearch,]=useState()
 useEffect(()=>{
    const emails=localStorage.getItem("email")
    fetch('https://jsoncovert.herokuapp.com/totalaCount?email='+emails)
    .then(res=>res.json())
    .then(result=>{
        setTotalCount(result)
    })

},[])
    const handleSearch=(e)=>{
        e.preventDefault();
        fetch('https://jsoncovert.herokuapp.com/allCsv?sc='+search)
        .then(res=>res.json())
        .then(result=>{
            setAllCsv(result[0])
        })
    }
   
    const [others,setOthes]=useState() 
    // const [allOther,setAllOthrs]=useState({})
    // console.log(others)
    // const handleAllOthers=()=>{
    //     fetch('https://jsoncovert.herokuapp.com/allothers?oh='+others)
    //     .then(res=>res.json())
    //     .then(result=>{
    //         setAllOthrs(result[0])
    //     })
    // }
    const handleNewNum = () => {
        const preNumber=allCsv.Mobile
        const id=allCsv._id
        const agentEmail=localStorage.getItem("email")
        fetch(`https://jsoncovert.herokuapp.com/update/${id}`,{
                    method:"POST",
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                      },
                      body: JSON.stringify({"number":others,"preNumber":preNumber,"agentEmail":agentEmail,})
                })
                .then(res=>res.json())
                .then(result=>{
                    console.log(result)
                })
    }
    const [count,setCount]=useState(0)
    const handleCount=()=>{
        const email=localStorage.getItem("email")
        const newCount=count+1
        setCount(newCount)
        fetch(`https://jsoncovert.herokuapp.com/coutEdit`,{
                    method:"POST",
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                      },
                      body: JSON.stringify({"email":email,"count":newCount})
                })
                .then(res=>res.json())
                .then(result=>{
                    console.log(result)
                   
                })
    }
    // const [data,setData]=useState()
    // const handleUpdate = () => {
    //     fetch(`https://jsoncovert.herokuapp.com/update/${allCsv._id}`,{
    //         method:"PUT",
    //         headers: {
    //             'Content-Type': 'application/json'
    //             // 'Content-Type': 'application/x-www-form-urlencoded',
    //           },
    //           body: JSON.stringify({"number":data})
    //     })
    //     .then(res=>res.json())
    //     .then(result=>{
    //         console.log(result)
    //     })
    // }
    
    // const handleNumber = () => {
    //     const preNumber=allCsv.Mobile
    //     console.log(preNumber)
    //     const email=""
    //     fetch(`https://jsoncovert.herokuapp.com/others`,{
    //                 method:"POST",
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                     // 'Content-Type': 'application/x-www-form-urlencoded',
    //                   },
    //                   body: JSON.stringify({"number":others,"preNumber":preNumber,"agentEmail":"safd",})
    //             })
    //             .then(res=>res.json())
    //             .then(result=>{
    //                 console.log(result)
    //             })
    // }
   
    const agenMail=localStorage.getItem("email")
    var input = document.getElementById("myInput");
   return (
        <section>
            <div className="container ">

            <h2 className="text-center">Agent Panel</h2>
                <div className="row">
                <div className="col-md-7"></div>
                <div className="col-md-5">
                <h4 style={{background:"#000",color:"#fff",textAlign:"center",padding:"10px"}}>Mail: {agenMail}</h4>
                <h4 style={{background:"#000",color:"#fff",textAlign:"center",padding:"10px"}}>Total Edit :{totalCount.length}</h4>
                </div>
                <div className="col-md-8">
                  <div className="search">
                  <input type="text" placeholder="Search With Mobile Number/NID/MIS ID/"
                    onChange={e=>setSearch(e.target.value)}
                    name="value"
                    height="60px"
                    width="200px"
                
                />
                  </div>      
                </div>
                <div className="col-md-3">
                    <div >
                    <input type="submit" value="Search"  onClick={handleSearch}  style={{cursor:"pointer", marginBottom:"20px"}}/>
                    </div>
                    <div >
                   <Link to="/ExcleForm"><button>Add New Excle Data</button></Link>
                    </div>
                </div>
                </div>
               
                   <div className="row">
                       <div className="col-md-12"> 
                                        <table class="table">
                                    <thead>
                                    <tr>
                         <th scope="col">MIS ID</th>
                         <th scope="col">Name In Enlish</th>
                     <th scope="col">NID</th>
                 <th scope="col">MOBILE NUMBER</th>
                 <th scope="col">NEW MOBILE NUMBER</th>
                 <th scope="col">REMARKS</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td></td>
                <td></td>
                <td>{allCsv?.NID}</td>
                <td>{allCsv?.Mobile}</td>
                {allCsv?.New_Number?<td>{allCsv?.New_Number}</td>:<td>
                <input type="text" onChange={e=>setOthes(e.target.value)} placeholder="type 10 digit number"/> <br/>
               <button onClick={()=>{
                    handleNewNum()
                    handleCount()
                    handleSearch()
                    setCount(0)
                }}>Add</button>
                 <br/>
                </td>}
              {allCsv?.New_Number?<td>{allCsv?.Remark}</td>:<td>Blank</td>}
    </tr>
    
  </tbody>
</table>
                                  
                       </div>
                   </div>
                   
               
            </div>
        </section>
    )
}
