import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Title from '../Title'
import Submit from '../Submit'
import '../../styles/common.css'
import './third.css'

const Third = ({currentStep, updateStep}) => {
  return (
    <div>
    <div className='container'>
    
    <div className='title-container'>
    <Title boldText={"How are you planning to use Eden?"} lightText={"We will streamline your setup experience accordingly."} />
    </div>
    <div className='formElements'>
    <div className='cards'>
    <input type="radio" name="radio"  id="myself" checked />
      <label className='card' htmlFor='myself'>
      <i class="fa-size fa-solid fa-user"></i>
        <strong className='title'>For myself</strong>
        <p className='desc'>Write better.Think <br /> more clearly. Stay <br/>organized.</p>
      </label>
      <input type="radio" name="radio" id="team" />
      <label className='card' htmlFor='team'>
      <i class="fa-size fa-solid fa-users"></i>
        <strong className='title'>With my team</strong>
        <p className='desc'>Wikis, docs, tasks & <br />projects, all in one<br/>place.</p>
      </label>
    </div>
    <Submit onClick={()=>updateStep(currentStep+1)} buttonText={"Create Workspace"} />
    </div>
    </div>
    </div>
  )
}

export default Third
