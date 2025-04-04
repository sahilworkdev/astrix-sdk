import React from 'react'
import CartEventDetails from './CartEventDetails'
import { BillSummary } from './BillSummary'

const YouCart = () => {

    const detailsStyles = {
        eventNameTextColor:"#E8EAED",
        eventNameTextSize:"19px",
        eventNameTextWeight:"500",
        eventDescriptionColor:"#AFB6C0",
        eventDescriptionSize:"11px",
        eventDescriptionWeight:"400",
        ticketNameTextColor:"#E8EAED",
        ticketNameTextSize:"19px",
        ticketNameTextWeight:"600",
        ticketDescriptionColor:"#AFB6C0",
        ticketDescriptionSize:"10px",
        ticketDescriptionWeight:"200",
        tickeCountAndPriceColor:"#E8EAED",
        tickeCountAndPriceSize:"20px",
        tickeCountAndPriceWeight:"600",
        detailHeaderColor:"#CCD0D7",
        detailHeaderSize:"16px",
        detailHeaderWeight:"400",
        valuesColor:"#CCD0D7",
        valuesSize:"16px",
        valuesWeight:"400"
    }

    const billSummaryStyles = {
        headingTextColor:"#E8EAED",
        headingTextSize:"22px",
        headingTextWeight:"700",
        listTagColor:"#E8EAED",
        listTagSize:"16px",
        listTagWeight:"400",
        listValueColor:"#AFB6C0",
        listValueSize:"16px",
        listValueWeight:"400",
        totalAmountAndPayTagColor:"#E8EAED",
        totalAmountAndPayTagSize:"16px",
        totalAmountAndPayTagWeight:"400",
        totalAmountAndPayValueColor:"#B0E681",
        totalAmountAndPayValueSize:"20px",
        totalAmountAndPayValueWeight:"700",
    }

    const paymentStyles = {
        textColor:"#E8EAED",
        textSize:"16px",
        textWeight:"400",
    }

  return (
    <div style={{border:"1px solid #31373F66", backgroundColor:"#1F1F1F99", padding:"12px 16px", borderRadius:"12px"}}>
        <div>
            <p style={{color:"#E8EAED", fontSize:"21px", fontWeight:"600", marginBottom:"16px", fontFamily:"Mulish"}}>Your Cart</p>
        </div>
        <div>
            <CartEventDetails styles={detailsStyles} />
        </div>
        <div>
            <BillSummary styles={billSummaryStyles}  />
        </div>
    </div>
  )
}

export default YouCart