import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const ExcleForm = () => {
    const [formValue,setFormValue]=useState({})
 
const handleExcleForm=(e)=>{
    const newFormValue={...formValue}
    newFormValue[e.target.name]=e.target.value
    setFormValue(newFormValue)
}


const handleForm= async e=>{
  
    const id= formValue.id
    const diid =formValue.diid
    const bn_id= formValue.bn_id
    const nid= formValue.nid
    const bn_name = formValue.bn_name
    const En_Name= formValue.En_Name
    const Bn_M_Name= formValue.Bn_M_Name
    const En_M_Name = formValue.En_M_Name
    const Bn_F_Name = formValue.Bn_F_Name
    const En_F_Name= formValue.En_F_Name
    const H_W_Name= formValue.H_W_Name
    const dOB= formValue.dOB
    const Age = formValue.Age
    const District= formValue.District
    const upuzela_Thana= formValue.upuzela_Thana
    const Ward = formValue.Ward
    const Village= formValue.Village
    const Religion= formValue.Religion
    const Occupation= formValue.Occupation
    const Gender = formValue.Gender
    const Mobile= formValue.Mobile
    const Program_Name = formValue.Program_Name
    const Pass_Book_No= formValue.Pass_Book_No
    const Bank_Name= formValue.Bank_Name
    const Bank_Branch = formValue.Bank_Branch
    const Account_Status= formValue.Account_Status
    const Bank_Account_No= formValue.Bank_Account_No
    const Stipend_Date = formValue.Stipend_Date
    const phone= formValue.phone
    const Phone_Owner= formValue.Phone_Owner
    const Bn_Status = formValue.Bn_Status
    const Nid_Status= formValue.Nid_Status
    const Approval_Status= formValue.Approval_Status
    const User_Name = formValue.User_Name
    const user_id= formValue.user_id
    const Agent_mail= formValue.Agent_mail
    const New_Number= formValue.New_Number
    const Remarks = formValue.Remarks
    const page_number= formValue.page_number
    fetch(`http://localhost:40001/new`,{
      method:"POST",
      headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
           "id":id,
           "diid":diid,
           "bn_id":bn_id,
           "nid":nid,
           "bn_name":bn_name,
           "En_Name":En_Name,
           "Bn_M_Name":Bn_M_Name,
           "En_M_Name":En_M_Name,
           "Bn_F_Name":Bn_F_Name,
           "En_F_Name":En_F_Name,
           "H_W_Name":H_W_Name,
           "DOB":dOB,
           "Age":Age,
           "District":District,
           "upuzela_Thana":upuzela_Thana,
           "Ward":Ward,
           "Village":Village,
           "Religion":Religion,
           "Occupation":Occupation,
           "Gender":Gender,
           "Mobile":Mobile,
           "Program_Name":Program_Name,
           "Pass_Book_No":Pass_Book_No,
           "Bank_Name":Bank_Name,
           "Bank_Branch":Bank_Branch,
           "Account_Status":Account_Status,
           "Bank_Account_No":Bank_Account_No,
           "Stipend_Date":Stipend_Date,
           "phone":phone,
           "Phone_Owner" :Phone_Owner,
           "Bn_Status" :Bn_Status,
           "Nid_Status" :Nid_Status,
           "Approval_Status":Approval_Status,
           "User_Name":User_Name,
           "user_id" :user_id,
           "Agent_mail":Agent_mail,
           "New_Number":New_Number,
           "Remarks" :Remarks,
           "page_number":page_number
       })
  })
  .then(res=>res.json())
  .then(result=>{
      console.log(result)

  })

  e.PreventDefault();   
}

    return (
        <section style={{background:"#000",color:"#fff",paddingBottom:"30px",paddingTop:"30px"}}>
            <div className="container text-center mt-5 mb-5">
            <Link to="/agentcsv"><button> Home</button></Link>
            <h3 onClick={handleForm}> Writre New Excle Data</h3>
               <form>
               <div className="row">
                <div className="col-md-6">
                   <div>
                   <label > Put  id</label>
            <input type="text" name="id" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite the  id"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put diid</label>
            <input type="text" name="diid" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite the  diid"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > bn_id</label>
            <input type="text" name="bn_id" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite the  bn_id"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put nid</label>
            <input type="text" name="nid" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite the  nid"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put bn_name</label>
            <input type="text" name="bn_name" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite the bn_name"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put En_Name</label>
            <input type="text" name="En_Name" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite the  En_Name"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Bn_M_Name</label>
            <input type="text" name="Bn_M_Name" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite the Bn_M_Name"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put En_M_Name</label>
            <input type="text" name="En_M_Name" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite the  En_M_Name"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Bn_F_Name</label>
            <input type="text" name="Bn_F_Name" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite the Bn_F_Name"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put En_F_Name</label>
            <input type="text" name="En_F_Name" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite the  En_F_Name"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put H_W_Name</label>
            <input type="text" name="H_W_Name" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite H_W_Name"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put DOB</label>
            <input type="text" name="dOB" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite DOB"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Your Age</label>
            <input type="text" name="Age" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Age"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put District</label>
            <input type="text" name="District" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite District"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put upuzela_Thana</label>
            <input type="text" name="upuzela_Thana" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite upuzela_Thana"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Ward</label>
            <input type="text" name="Ward" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Ward"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Village</label>
            <input type="text" name="Village" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Village"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Religion</label>
            <input type="text" name="Religion" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Religion"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Occupation</label>
            <input type="text" name="Occupation" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Occupation"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Gender</label>
            <input type="text" name="Gender" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Gender"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Mobile</label>
            <input type="text" name="Mobile" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Mobile"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Program_Name</label>
            <input type="text" name="Program_Name" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Program_Name"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Pass_Book_No</label>
            <input type="text" name="Pass_Book_No" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Pass_Book_No"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Bank_Name</label>
            <input type="text" name="Bank_Name" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Bank_Name"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Bank_Branch</label>
            <input type="text" name="Bank_Branch" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Bank_Branch"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Account_Status</label>
            <input type="text" name="Account_Status" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Account_Status"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Bank_Account_No</label>
            <input type="text" name="Bank_Account_No" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Bank_Account_No"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Stipend_Date</label>
            <input type="text" name="Stipend_Date" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Stipend_Date"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put phone</label>
            <input type="text" name="phone" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite phone"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Phone_Owner</label>
            <input type="text" name="Phone_Owner" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Phone_Owner"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Bn_Status</label>
            <input type="text" name="Bn_Status" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Bn_Status"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Nid_Status</label>
            <input type="text" name="Nid_Status" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Nid_Status"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Approval_Status</label>
            <input type="text" name="Approval_Status" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Approval_Status"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put User_Name</label>
            <input type="text" name="User_Name" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="WiteUser_Name"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put user_id</label>
            <input type="text" name="user_id" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite user_id"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Agent_mail</label>
            <input type="text" name="Agent_mail" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Agent_mail"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put New_Number</label>
            <input type="text" name="New_Number" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite New_Number"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Remarks</label>
            <input type="text" name="Remarks" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Remarks"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put page_number</label>
            <input type="text" name="page_number" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite page_number"/>
                   </div>
                </div>
                <div className="col-md-6">
                   {
                      formValue.id&&formValue.diid&&formValue.nid?<div onClick={handleForm}>
                   
                   <input type="submit" style={{width:"100%",padding:"10px",marginTop:"20px"}} value="Submit"/>
                          </div>:<h4> put the minumum value. then Submit button Show </h4>
                   }
                </div>
                
               </div> 
               </form>
            </div>
        </section>
    )
}
