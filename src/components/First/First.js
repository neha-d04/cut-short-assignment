import React from 'react'
import Title from '../Title'
import Submit from '../Submit'
import '../../styles/common.css'


const First = ({currentStep, updateStep}) => {
  return (
    <div className='container'>
    
      <div className='title-container'>
      <Title boldText={"Welcome! First things first..."} lightText={"You can always change them later."} />
      </div>

      <div className='formElements'>
        <label htmlFor="fullname">Full Name</label>
        <input id="fullname" className='inputStyle' type="text" placeholder='Steve Jobs' />
        <label htmlFor="displayname">Display Name</label>
        <input id="displayname" className='inputStyle' type="text" placeholder='Steve'/>
        <Submit onClick={()=>updateStep(currentStep+1)} buttonText={"Create Workspace"} />
      </div>
    </div>
  )
}

export default First