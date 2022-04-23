import React from 'react'
import Title from '../Title'
import Submit from '../Submit'
import '../../styles/common.css'

const Second = ({currentStep, updateStep}) => {
  return (
    <div className='container'>
      <div className='title-container'>
      <Title boldText={"Let's set up a home for all your work"} lightText={"You can always create another workspace later."} />
      </div>

      <div className='formElements'>
        <label htmlFor="workspace">Workspace Name</label>
        <input id="workspace" className='inputStyle' type="text" placeholder='Eden' />
        <label htmlFor="workspaceurl">Workspace URL (optional)</label>
        <div style={{display:'flex'}}>
        <input id="workspaceurl" className='inputStyle domain' type="text" placeholder='www.eden.com/' disabled/>
        <input type="text" className='inputStyle endpoint' />
        </div>
        <Submit onClick={()=>updateStep(currentStep+1)} buttonText={"Create Workspace"} />
      </div>
    </div>
  )
}

export default Second
