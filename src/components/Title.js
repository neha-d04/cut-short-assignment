import React from 'react'

const Title = ({boldText, lightText}) => {
  return (
    <div>
        <h1>{boldText}</h1>
        <div style={{fontSize:"0.9rem", color:"gray"}}>{lightText}</div>
    </div>
  )
}

export default Title