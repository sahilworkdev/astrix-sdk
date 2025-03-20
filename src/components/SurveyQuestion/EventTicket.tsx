import React from 'react'
import Questions from './Questions'
import Btns from './Btns'

const EventTicket = () => {
  return (
    <div>
        <p style={{color:"#E8EAED", fontSize:"28px" ,fontWeight:"600" }}>Event Ticket</p>
        <p style={{color:"#AFB6C0", fontSize:"14px" ,fontWeight:"600" , paddingTop:"10px"}}>desct pf the event</p>
        <div style={{display:"flex", gap:"10px",marginTop:"20px",justifyContent:"space-between", alignItems:"center", minWidth:"100%"}}>
            <p style={{border:"1px solid #31373F", flex: 1}}></p>
            <p style={{color:"#768293", fontSize:"16px", fontWeight:"600"}}>Questions</p>
            <p style={{border:"1px solid #31373F", flex: 1}}></p>
        </div>
        <div style={{marginTop:"20px"}}>
            <div>
                <Questions />
            </div>
        </div>

    </div>
  )
}

export default EventTicket