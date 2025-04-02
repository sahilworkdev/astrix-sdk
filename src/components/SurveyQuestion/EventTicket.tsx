import React, { useState } from 'react'
import Questions from './Questions'
import Btns from './Btns'

const EventTicket = () => {

    const [formData, setFormData] = useState({
        q1:"",
        q2:"",
        q3:"",
        q4:"",
        q5:"",
    })

    const onChange = (e:any) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    console.log(formData,"form")

    const checkboxList = ["optionOne", "optionTwo", "optionThree", "optionFour", "optionFive"]
    const queStyles = {
        questionTextColor:"#F6F2FF",
        questionTextFontSize:"18px",
        questionTextWeight:"400", 
        answerTextColor:"#768293",
        answerTextFontSize:"16px",
        answerTextWeight:"600",
    }

  return (
    <div>
        <p style={{color:"#E8EAED", fontSize:"28px" ,fontWeight:"600" }}>Event Ticket</p>
        <p style={{color:"#AFB6C0", fontSize:"14px" ,fontWeight:"600" , paddingTop:"10px"}}>desct pf the event</p>
        <div style={{display:"flex", gap:"10px",marginTop:"20px",justifyContent:"space-between", alignItems:"center", minWidth:"100%"}}>
            <p style={{border:"1px solid #31373F", flex: 1}}></p>
            <p style={{color:"#768293", fontSize:"16px", fontWeight:"600"}}>Questions</p>
            <p style={{border:"1px solid #31373F", flex: 1}}></p>
        </div>
        <div style={{marginTop:"20px", display:"flex", flexDirection:"column", gap:"10px"}}>
            <div>
                <Questions questionType="checkbox" checkboxList = {checkboxList} styles={queStyles} onChange={onChange} name={"q1"} value={formData.q1} />
            </div>
            <div>
                <Questions questionType="radio"  radioList = {checkboxList} styles={queStyles} onChange={onChange} name={"q2"} value={formData.q2}/>
            </div>
            <div>
                <Questions questionType="text"  radioList = {checkboxList} styles={queStyles} onChange={onChange} name={"q3"} value={formData.q3}/>
            </div>
            <div>
                <Questions questionType="textarea" radioList = {checkboxList}  styles={queStyles} onChange={onChange} name={"q4"} value={formData.q4}/>
            </div>
            <div>
                <Questions questionType="date" radioList = {checkboxList} styles={queStyles} onChange={onChange}  name={"q5"} value={formData.q5}/>
            </div>
        </div>

    </div>
  )
}

export default EventTicket