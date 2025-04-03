import React from 'react'
import YouCart from './YouCart'
import PaymentSelection from './PaymentSelection'
import { useSelector } from 'react-redux'
import { values } from 'lodash'

const CartHead = () => {
  
  const eventDetail = useSelector((state:any) => state.selectedEventDetail.selectedEventDetail)

  const values = {
    "eventId": "1735200517219",
    "eventData": [],
    "name": "Invalid Event 5",
    "description": "Updated ES1 Description. \r<div><b>Bold Description.\r</b></div><div><i>Italic Description.\r</i></div><div><u>Underlined Description.\r</u></div><div><a href=\"Google.com\">Link\r</a></div><div>&nbsp;</div>",
    "venue": "Mumbai",
    "location": "Mumbai Hall",
    "startDate": "2024-12-26T09:30:00.000Z",
    "endDate": "2026-03-07T06:30:00.000Z",
    "status": "public",
    "images": {
        "5_4": [
            "https://astrix.blob.core.windows.net/astrix/anonymous_564/collectibles/af1b4927fce980e131dd/collectibleCount1.jpeg"
        ]
    },
    "tags": [
        "test",
        "TestEvent"
    ],
    "termsAndConditions": null,
    "metaData": {
        "style": {
            "font": "Mulish",
            "color": "#af8cff"
        }
    },
    "type": "other",
    "convenienceFee": 10,
    "artists": [
        {
            "startTime": "2024-01-10T20:00:00.000Z",
            "endTime": "2024-01-10T22:00:00.000Z",
            "description": "A passionate musician blending electronic beats with acoustic sounds.",
            "socials": {
                "spotify": "https://open.spotify.com/artist/artist1",
                "instagram": "https://www.instagram.com/artist1"
            },
            "name": "Artist One",
            "avatar": "https://example.com/avatars/artist1.jpg"
        }
    ],
    "user": {
        "username": "anonymous_564",
        "avatar": "https://astrix.blob.core.windows.net/cdn/Avatars/Number=2.png",
        "name": "Subha Biswal WSTF"
    },
    "tickets": [
        {
            "name": "ES2 T1",
            "description": "ES2 Ticket2 Description.\r<div><b>Bold Description.\r</b></div><div><i>Italic Description.\r</i></div><div><u>Underlined Description.\r</u></div><div>Link\r</div><div><br></div>",
            "image": "https://astrix.blob.core.windows.net/astrix/anonymous_564/collectibles/af1b4927fce980e131dd/collectibleCount1.jpeg",
            "issueQty": 30,
            "price": 5,
            "resaleRoyalty": 0,
            "maxQty": 2,
            "tId": "1735200517224",
            "availableQty": 30,
            "state": "active",
            "rsvp": false,
            "flexPrice": false,
            "metaData": {
                "addons": {
                    "purchaseForm": false
                }
            },
            "cId": "2d42a059-9305-4e3a-8e72-eda6ff6979a3",
            "approveOnly": false,
            "purchaseForm": null,
            "boughtBy": [],
            "collectibles": []
        }
    ]
}

  const paymentStyles = {
    textColor:"#E8EAED",
    textSize:"16px",
    textWeight:"400",
}



  return (
    <div style={{display:"flex", gap:"10px", padding:"20px", overflow:"auto", height:"100%"}}>
        <div style={{width:"40%"}}><YouCart values={values} /></div>
        <div style={{width:"60%"}}>
            <PaymentSelection  styles={paymentStyles} />
        </div>
    </div>
  )
}

export default CartHead