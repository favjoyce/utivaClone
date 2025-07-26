import React from 'react'
import "./header.css"


const Newbtn = ({title,bgcolor,border,colors}) => {
  const BtnStyle={
    backgroundColor:bgcolor,
    border:`1px solid ${border}`,
    color:colors,
  }
  return (
    <div className='boltBtn'>
    <div className='bbWrap'>
      <button style={BtnStyle}> {title} <span class="material-symbols-outlined electric">
electric_bolt
</span></button>
    </div>
    </div>
  )
}

export default Newbtn
