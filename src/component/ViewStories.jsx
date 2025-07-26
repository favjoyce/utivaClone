import React from 'react'
import "./header.css"

const ViewStories = ({Images,pftext,pstext,imgtwo,}) => {
  return (
    <div className='vic'>
      <div className='vic1img'>
        <img src={Images} alt="" />
        <div className='pm'><p>Product Management</p></div>
      </div>
      <div className='textDivs'>
      <div className='TwoP'>
        <p >{pftext}</p>
        <p>{pstext}</p>
      </div>
      <div className='avatarImg'>
        <img src={imgtwo} alt="" />
      </div>
      <button className='Readbtn'>Read More</button>
    </div>
    </div>
  )
}

export default ViewStories
