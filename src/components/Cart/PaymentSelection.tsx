import React from 'react'

const PaymentSelection = ({styles}:any) => {
  return (
    <div  style={{border:"1px solid #31373F66", backgroundColor:"#1F1F1F99", padding:"10px", borderRadius:"12px"}}>
         <p style={{color:"#E8EAED", fontSize:"22px", fontWeight:"700", marginBottom:"16px"}}>PaymentSelection</p>
         <div style={{border:"1px solid #31373F66", backgroundColor:"#1F1F1F99", padding:"10px", borderRadius:"12px"}}>
            <p style={{color:styles.textColor, fontSize:styles.textSize, fontWeight:styles.textWeight,}}>RazorPay</p>
         </div>
    </div>
  )
}

export default PaymentSelection