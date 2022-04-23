import React from 'react'
import Title from '../Title'
import Submit from '../Submit'
import '../../styles/common.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Fourth = () => {
  return (
    <div className='container'>
    <div className='title-container'>
    <i class=" fa-4x fa-solid fa-circle-check" style={{color:'var(--accent)', marginBottom: "2rem"}}></i>
    <Title boldText={"Congratulations, Eren!"} lightText={"You have completed onboarding, you can start using the Eden!"} />
    </div>
    <div className='formElements'>
    <Submit buttonText={"Launch Eden"} />
    </div>
    </div>
  )
}

export default Fourth
