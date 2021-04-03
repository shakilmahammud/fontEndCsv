import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './AgentPanel.css'
import proxy from "../../proxy.json";
import axios from 'axios';

export const AgentPanel = () => {
 const [allCsv,setAllCsv]=useState([])
const[totalCount,setTotalCount]=useState([])
 const [search,setSearch,]=useState()
 const [notFound,setNotFound]=useState()
 useEffect(()=>{
    const emails=localStorage.getItem("email")
    fetch(proxy.endpoint+'totalaCount?email='+emails)
    .then(res=>res.json())
    .then(result=>{
        setTotalCount(result)
    })

},[])
    const handleSearch=async e=>{
        // fetch(proxy.endpoint+'allCsv?sc='+search)
        // .then(res=>res.json())
        // .then(result=>{
        //     setAllCsv(result[0])
        // })
        try{
            const response=await axios.get(proxy.endpoint+'allCsv?sc='+search)
            if(response){
                if(response.data.length>0){
                    setAllCsv(response.data)
                }else{
                    setNotFound("Data Not Available in data base")
                }
            }
           }catch (e) {
               console.log(e)
           }
       
    }
   
    
   
    const agenMail=localStorage.getItem("email")
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
                       {notFound !==undefined?<h2 className="text-center">{notFound}</h2> :null} 
                                  {allCsv.map(show=><Showdata show={show} key={show._id} handleSearch={handleSearch}/>)}
                                      
                       </div>
                   </div>
                   
               
            </div>
        </section>
    )
}


export const Showdata=(show,handleSearch)=>{
    const [others,setOthes]=useState() 
    const [page,setPage]=useState()
 console.log(show)
    const handleNewNum = async() => {
        const preNumber=show.Mobile
        const id=show._id
        const agentEmail=localStorage.getItem("email")
        // fetch(proxy.endpoint+`update/${id}`,{
        //             method:"POST",
        //             headers: {
        //                 'Content-Type': 'application/json'
        //                 // 'Content-Type': 'application/x-www-form-urlencoded',
        //               },
        //               body: JSON.stringify({"number":others,"preNumber":preNumber,"agentEmail":agentEmail,"page_number":page})
        //         })
        //         .then(res=>res.json())
        //         .then(result=>{
        //             console.log(result)
        //         })
        try{
            const response=await axios.post(proxy.endpoint+`update/${id}`,{
                "number":others,
                "preNumber":preNumber,
                "agentEmail":agentEmail,
                "page_number":page})
            console.log(response)
           }catch (e) {
               console.log(e)
           }
    }
    const [count,setCount]=useState(0)
    const handleCount= async()=>{
        const email=localStorage.getItem("email")
        const newCount=count+1
        setCount(newCount)
        // fetch(proxy.endpoint+`coutEdit`,{
        //             method:"POST",
        //             headers: {
        //                 'Content-Type': 'application/json'
        //                 // 'Content-Type': 'application/x-www-form-urlencoded',
        //               },
        //               body: JSON.stringify({"email":email,"count":newCount})
        //         })
        //         .then(res=>res.json())
        //         .then(result=>{
        //             console.log(result)
                   
        //         })
        try{
            const response=await axios.post(proxy.endpoint+`coutEdit`,{"email":email,"count":newCount})
            console.log(response)
           }catch (e) {
               console.log(e)
           }
    }
   return(
    <table className="table">
                                    <thead>
                                    <tr>
                         <th scope="col">MIS ID</th>
                         <th scope="col">Name In Enlish</th>
                     <th scope="col">NID</th>
                 <th scope="col">MOBILE NUMBER</th>
                 <th scope="col">NEW MOBILE NUMBER</th>
                 <th scope="col">Page NUMBER</th>
                 <th scope="col">REMARKS</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td>{show.diid}</td>
                <td>{show.En_Name}</td>
                <td>{show.NID}</td>
                <td>{show.Mobile}</td>
                {show?.New_Number?<td>{show?.New_Number}</td>:<td>
                <input type="text" onChange={e=>setOthes(e.target.value)} placeholder="type 10 digit number"/> <br/>
               
               <button onClick={()=>{
                    handleNewNum()
                    handleCount()
                    handleSearch()
                    setCount(0)
                }}>Add</button>
                 <br/>
                </td>}
                {show?.page_number?<td>{show?.page_number}</td>:<td>
                <input type="text" onChange={e=>setPage(e.target.value)} placeholder="give the page number"/> <br/>
                 <br/>
                </td>}
              {show?.New_Number?<td>{show?.Remark}</td>:<td>Blank</td>}
    </tr>
    
  </tbody>
</table>
   )
}