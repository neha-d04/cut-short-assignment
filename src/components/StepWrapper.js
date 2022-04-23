import React, { useEffect, useState } from 'react'
import Step from './Step'
import logo from '../logo.png'

export default function StepWrapper({ currentStep }) {
    const [width, setWidth] = useState(0)
    const steps = [1, 2, 3, 4]
    useEffect(()=>{
       const width = currentStep/steps.length*100
       setWidth(width);
    },[currentStep])
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <div className='steps-wrapper'>
            <div className='progress' style={{
                width:`${width}%`
            }}></div>
                {steps.map((ele) => <Step number={ele} currentStep={currentStep} />)}
            </div>
        </div>
    )
}
