import React from 'react'

const Btns = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%", marginTop:"20px"}}>
        <div style={{border:"1px solid #B0E681", borderRadius:"40px", padding:"5px 20px", color:"#B0E681", fontSize:"16px", fontWeight:"600"}}><p>Cancle</p></div>
        <div style={{backgroundColor:" #B0E681", borderRadius:"40px", padding:"5px 20px", color:"#000000", fontSize:"16px", fontWeight:"600"}}><p>Save</p></div>
    </div>
  )
}

export default Btns