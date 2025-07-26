import React from 'react'
import Newbtn from '../component/Newbtn'
import "./header.css"



const BootImg = ({
    Iam,
    spandata,
    spannumber,
    viewcourse,
    and,
    bgImage,
    bgcolors

}) => {
    const Style={
        backgroundColor:bgcolors,
    }
  return (
    <div className='Bootimg' style={Style}>
        <div className='BIImg'>
        <img src={bgImage} alt="" className='biimainimg'/>
        <div className='newbtnAbsolute'>
      <Newbtn bgcolor={"white"} border={"#33BD7A"} title={'BOOTCAMP'} 
      colors={"#33BD7A"} 
      />
      </div>
      </div>
        <div className='BIImgColor' >
          <div className='textDiv'>
          <p className='iam'>
            {Iam} <br />
            <span className='spandata'>{spandata}</span>

            {and}

            <span className='spandata'>{spannumber}</span>
          </p>
      <div className=' viewcourse'>
       <p>
        {viewcourse} 
       </p>
        <span class="material-symbols-outlined arForward">arrow_forward </span> 
       </div>
          </div>
        </div>

    </div>
  )
}

export default BootImg
