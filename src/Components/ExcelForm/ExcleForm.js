import React, { useState } from 'react'
import axios from 'axios'

export const ExcleForm = () => {
    const [formValue,setFormValue]=useState({})
 
const handleExcleForm=(e)=>{
    const newFormValue={...formValue}
    newFormValue[e.target.name]=e.target.value
    setFormValue(newFormValue)
}

const handleForm=()=>{

    const formData=new FormData()
    formData.append("id",formValue.id)
    formData.append("diid",formValue.diid)
    formData.append("bn_id",formValue.bn_id)
    formData.append("nid",formValue.nid)
    formData.append("bn_name",formValue.bn_name)
    formData.append("En_Name",formValue.En_Name)
    formData.append("Bn_M_Name",formValue.Bn_M_Name)
    formData.append("id",formValue.id)
    formData.append("id",formValue.id)
    formData.append("id",formValue.id)
    formData.append("id",formValue.id)
    formData.append("id",formValue.id)
    formData.append("id",formValue.id)
    formData.append("id",formValue.id)
    formData.append("id",formValue.id)
    formData.append("id",formValue.id)
    formData.append("id",formValue.id)
    formData.append("id",formValue.id)
    axios.post ('/user',formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
}

    return (
        <section>
            <div className="container text-center mt-5 mb-5">
            <h3> Writre New Excle Data</h3>
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
            <input type="text" name="DOB" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite DOB"/>
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
            <input type="text" name="id" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite New_Number"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div>
                   <label > Put Remarks</label>
            <input type="text" name="Remarks" onChange={handleExcleForm} style={{width:"100%",padding:"10px"}} placeholder="Wite Remarks"/>
                   </div>
                </div>
               
                
               </div> 
            </div>
        </section>
    )
}
