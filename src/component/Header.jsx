import React from 'react'
import "./header.css"
import Button from '../component/Button'
import utivaimg from "../assets/utiva.svg"
 
const Header = () => {
  return (
    <>
    <div className='HeaderTopDiv'>
      <div className='htd-wrap'>
       <div className='utivaDiv'>
        <img src={utivaimg} alt="" />
       </div>

       <div className='schools'>
        <div className='school'> 
            <p>Schools</p>
             <span class="material-symbols-outlined">
                keyboard_arrow_down
                </span>        
        </div>
        <div className='school'> 
            <p>Corporate</p>
             <span class="material-symbols-outlined">
                keyboard_arrow_down
                </span>        
        </div>
        <div className='school'> 
            <p>Company</p>
             <span class="material-symbols-outlined">
                keyboard_arrow_down
                </span>        
        </div>
       </div>
      <div className='header-but'>
              < Button btno={"Get started "} btnt={"Login"}/>

      </div>

      </div>
    </div>
    </>
  )
}


export default Header
