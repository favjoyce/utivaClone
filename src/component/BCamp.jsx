import React from 'react'
import "./header.css"
import Newbtn from './Newbtn'

const BCamp = (
    {
        intense,
        learn,
        view

    }
) => {
  return (
    <div className='LearnTech'>
      <div className='LTWrap'>
       <Newbtn title={"BootCamp"} />
       <h1>{intense}</h1>
       <p className='learnp'>{learn}</p>
       <div className='viewp'>
       <p>
        {view} 
       </p>
        <span class="material-symbols-outlined arForward">arrow_forward </span> 
       </div>


      </div>
    </div>
  )
}

export default BCamp
