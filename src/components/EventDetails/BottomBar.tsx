import React from 'react'

const BottomBar = ({styles}:any) => {
  return (
    <div>
        <div style={{display:"flex", justifyContent:"end", backgroundColor:styles.bg , padding:'15px'}}>
            <div style={{display:"flex", alignItems:"center"}}>
                <div>
                    <p style={{color:styles.priceTextColor, fontSize:styles.priceTextSize, fontWeight:styles.priceTextWeight, fontFamily:"Mulish",}}>32ui</p>
                    <p style={{color:styles.countsTextColor, fontSize:styles.countsTextSize, fontWeight:styles.countsTextWeight, fontFamily:"Mulish",}} >1 ticket <span>0 addOn</span></p>
                </div>
                <p style={{color:styles.btnTextColor, fontSize:styles.btnTextSize, fontWeight:styles.btnTextWeight, backgroundColor:styles.btnBg, borderRadius:styles.btnRadius, padding:"5px 20px 5px 20px", fontFamily:"Mulish",}}>Proceedto Pay</p>
            </div>
        </div>
    </div>
  )
}

export default BottomBar