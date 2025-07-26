import React from 'react'
import "./header.css"

const Button = ({btno,btnt,arrow,width,borderColor,height,color,align}) => {
  const Styles={
    width:width,
    height:height,
    alignItems:align
  }
  const Border={
        border:`1.5px solid ${borderColor}`,
        color:color

  }
  return (
    
      <div className='GetStarteddiv' style={Styles}>
        <button className='gs'>{btno} {arrow} {align}</button>
        <button className='gs log' style={Border}>{btnt} {arrow} {align} </button>
       </div>

  
  )
}

export default Button
