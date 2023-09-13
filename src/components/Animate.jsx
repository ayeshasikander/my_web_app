import React from 'react'
import Lottie  from 'lottie-react';
import animationData from '../assets/animation.json';
const Animate = () => {
    

  return (
      <Lottie style={{width:"100%",height:"500px"}} animationData={animationData} />
    
  )
}

export default Animate

