import React from 'react'
import YouCart from './YouCart'
import PaymentSelection from './PaymentSelection'
import { useSelector } from 'react-redux'
import { selectedTicket } from '@/data'
import { selectedEvent } from '@/data'


const CartHead = ({details}:any) => {
  
  const eventDetail = useSelector((state:any) => state.selectedEventDetail.selectedEventDetail)


  const paymentStyles = {
    textColor:"#E8EAED",
    textSize:"16px",
    textWeight:"400",
}





  return (
    <div style={{display:"flex", gap:"10px", padding:"20px", overflow:"auto", height:"100%"}}>
        <div style={{width:"40%"}}><YouCart values={details.yourCart} /></div>
        <div style={{width:"60%"}}>
            <PaymentSelection  styles={paymentStyles} />
        </div>
    </div>
  )
}

export default CartHead