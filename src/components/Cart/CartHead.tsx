import React from 'react'
import YouCart from './YouCart'
import PaymentSelection from './PaymentSelection'

const CartHead = () => {
  const paymentStyles = {
    textColor:"#E8EAED",
    textSize:"16px",
    textWeight:"400",
}



  return (
    <div style={{display:"flex", gap:"10px", padding:"20px", overflow:"auto", height:"100%"}}>
        <div style={{width:"40%"}}><YouCart /></div>
        <div style={{width:"60%"}}>
            <PaymentSelection  styles={paymentStyles} />
        </div>
    </div>
  )
}

export default CartHead