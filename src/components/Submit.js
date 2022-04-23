import React from 'react'

const Submit = ({buttonText, onClick}) => {
  return (
    <div>
        <button style={{padding:'0.7rem 8rem',width:'100%', backgroundColor:'#664de5', borderRadius:'4px', border:'none',color:'white',marginTop:10}} onClick={onClick}>{buttonText}</button>
    </div>
  )
}

export default Submit