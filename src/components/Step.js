import React from 'react'
import '../styles/common.css'

export default function Step({number, currentStep}) {
  return (
    <div className={`step ${number<=currentStep ? 'step-done': ''}`}>
        {number}
    </div>
  )
}
