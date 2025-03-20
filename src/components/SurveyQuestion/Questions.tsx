import React from 'react'

const Questions = () => {
  return (
    <div style={{backgroundColor:"#1F1F1F99", border:"1px solid #31373F66" , borderRadius:"12px", padding:"12px"}}>
        <div style={{display:"flex",gap:"5px" ,alignItems:"center"}}>
            <p style={{color:"#F6F2FF", fontSize:"18px", fontWeight:"400"}}>Questions ?</p>
            <p style={{color:"red", fontSize:"16px", fontWeight:"400"}}>*</p>
        </div>
        <div style={{marginTop:"10px"}}>
            <input style={{outline:"none", color:"#768293", fontSize:"16px", fontWeight:"600", border: 'none', borderBottom:"1px solid #48505B", backgroundColor:"transparent",padding:"10px" , width:"100%"}} type='text' placeholder='Type your answer here' />
        </div>
    </div>
  )
}

export default Questions