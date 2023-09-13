import React from 'react'

const Label = ({ text, fontSize, color, fontWeight, margin}) => {
  const labelStyle = {
    margin: margin || "2px",
    color: color || "white",
    fontWeight: fontWeight || 'bold',
    fontSize: fontSize || '16px',
  };
 
  return (
    
      <span style={labelStyle}>{text}</span>
  
  )
}

export default Label
