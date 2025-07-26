import React from 'react'
import "./header.css"
import Button from '../component/Button'
import "../component/newbtn"
import avatar from '../assets/avatar.png'
import overlay from '../assets/overlay.svg'
import chisom from '../assets/chisom.webp'
import playbtn from '../assets/play-btn.svg'
import ruth from '../assets/ruth.webp'
import gilbert from '../assets/gilbert.webp'
import slack from '../assets/slack.png'
import facebook from '../assets/facebook.webp'
import capital from '../assets/capitalOne.png'
import google from '../assets/google.jpg'
import amazon from '../assets/amazon.webp'
import samsung from '../assets/samsung.png'
import shopify from '../assets/shopify.png'
import uber from '../assets/Uber.png'
import bamboo from '../assets/bamboo.png'
import bolt from '../assets/bolt.png'
import bundle from '../assets/bundle.png'
import cowrywise from '../assets/cowrywise.png'
import cre from '../assets/Uber.png'
import square from '../assets/download.png'
import tiktok from '../assets/tiktok.png'
import mastercard from '../assets/mastercard.webp'
import macdonalds from '../assets/macdonald.png'
import pwc from '../assets/pwc.png'
import sap from '../assets/sap.png'
import hootsuite from '../assets/Hootsuite.png'
import kpmg from '../assets/kpmg.png'
import stripe from '../assets/stripe.png'
import move from '../assets/move.png'
import flutter from '../assets/flutterwave.png'
import paystack from '../assets/paystack.png'
import mono from '../assets/mono.jpeg'
import nomba from '../assets/nomba.jpeg'
import team from '../assets/teamapt.png'
import prospa from '../assets/prospa.png'
import piggyvest from '../assets/piggyvest.png'
import thrive from '../assets/thrive.jpeg'
import credpal from '../assets/credpal.png'
import okra from '../assets/okra.png'
import palmpay from '../assets/palmpay.jpeg'
import kuda from '../assets/Kuda-Bank.png'
import opay from '../assets/opay.webp'
import autocheck from '../assets/autocheck.png'
import Newbtn from '../component/newbtn'
import BCamp from '../component/bCamp'
import BootImg from './BootImg'
import School1 from '../assets/school1.webp'
import School2 from '../assets/school2.webp'
import School3 from '../assets/school3.webp'
import School4 from '../assets/school4.webp'
import School5 from '../assets/school5.webp'
import School6 from '../assets/school6.webp'
import School7 from '../assets/school7.webp'
import School8 from '../assets/school8.webp'
import ViewStories from './ViewStories'
import victoria from "../assets/victoria.jpg"
import landway from "../assets/landwey.png"
import falodun from "../assets/falodun.jpeg"
import ugo from "../assets/ugochukwu.jpeg"
import ini from "../assets/ini.jpg"
import aza from "../assets/aza.png"
import niyo  from "../assets/niyo.png"
import limestone from "../assets/limestone.png"
import whatsapp from "../assets/whatsicon.svg"



const Hero = () => {
  return (
    <>
    <div className='Build'>
      <div className='BuildWrap'>
        <div className='BW-left'>
         <h1 className='top-Build'>Building Top <br /> Tech Talents <br />for the World</h1>

         <p className='bootp ourAnimate'>Our Bootcamps are designed to help you learn from the best <br />industry leaders from more than 19 countries</p>
         <div className='but'>
             <Button btnt={"Business"} btno={"Individual"}  color={"#050794"} arrow={<span class="material-symbols-outlined ar">
arrow_forward
</span> }
height={"40px"}
/>
         </div>

         <div className='newBtn nba '  
  data-aos="fade-up" 
  data-aos-delay="200"
  data-aos-duration="300"
  data-aos-easing="ease-in-out">
          <img src={avatar} alt="" className='nbimg'/>
          <div className='newbtnwrap'>
          <p className='over110'>Over 110k+ professionals trained. 
            <span className='read'>Read stories</span>
          </p>
          </div>
         </div>
        </div>
        <div className='whatsapp'>
          <img src={whatsapp} alt="" />
        </div>
        <div className='BW-right' >
          <div className='Bwr-left'>
          <img src={chisom} alt="" className='chisom'/>
          <img src={overlay} alt="" className='avatar' />
          <p className='chiP'>Chisom <br />Mbama</p>
          <img src={playbtn} alt="" className='playbtn' />
          </div>

          <div className='chisomimg'>
            <img src={chisom} alt="" />
            <img src={gilbert} alt="" />
            <img src={ruth} alt="" />
          </div>
          <div className='Bwr-right'>

          </div>
        </div>

      </div>
    </div>
    <div className='pImages reveal'>
        <div className='pImages-wrap' >
           <p className='ourP'>Our Talents Work With Many of these Leading Tech Companies</p>
           <div className='img1 '    >
            <img src={slack} alt="" />
            <img src={facebook} alt="" />
            <img src={capital} alt="" />
            <img src={google} alt="" />
            <img src={amazon} alt="" />
            <img src={samsung} alt="" />
            <img src={shopify} alt="" />
            <img src={square} alt="" />
            <img src={uber} alt="" />
           </div>

           <div className='img1'>
            <img src={tiktok} alt="" />
            <img src={mastercard} alt="" />
            <img src={macdonalds} alt="" />
            <img src={pwc} alt="" />
            <img src={sap} alt="" />
            <img src={hootsuite} alt="" />
            <img src={kpmg} alt="" />
            <img src={stripe} alt="" />
            <img src={bolt} alt="" />
           </div>

           <div className='img1'>
            <img src={bundle} alt="" />
            <img src={move} alt="" />
            <img src={flutter} alt="" />
            <img src={paystack} alt="" />
            <img src={mono} alt="" />
            <img src={cowrywise} alt="" />
            <img src={bamboo} alt="" />
            <img src={nomba} alt="" />
            <img src={team} alt="" />
           </div>

           <div className='img1'>
            <img src={prospa} alt="" />
            <img src={piggyvest} alt="" />
            <img src={thrive} alt="" />
            <img src={credpal} alt="" />
            <img src={okra} alt="" />
            <img src={palmpay} alt="" />
            <img src={kuda} alt="" />
            <img src={opay} alt="" />
            <img src={autocheck} alt="" />
           </div>
        </div>
        
    </div>
    <div className='newBtn'
    data-aos="fade-up" 
  data-aos-delay="200"
  data-aos-duration="300"
  data-aos-easing="ease">
      <div className='newbtnwrap'>
     <Newbtn title={"NEW"}/>
     <p>HP Inc to support Utiva's mission to empower African women.
      <span className='read'>Read More</span>
          </p>
   </div>
   </div>

   <div className='bestLearn'>
     <div className='bestLearnWrap' data-aos="fade-up" 
  data-aos-delay="200"
  data-aos-duration="300"
  data-aos-easing="ease">
      <h1>What is the Best Learning  <br />
      Program for You?</h1>
     </div>
   </div>

   <div className='bootcamp'>
    <div className='bcWrap'>
      <div className='bcWrapLeft'>
       <BCamp intense={"Intensive BOOTCAMPS Designed To Help You Get Into Tech"} learn={"Learn tech with others in virtual classes, work on projects, and build your portfolio."}
       view={"View Programs"}
       
       />
      </div>
      <div className='bcwrapRight'>
     <BCamp
      intense={"Utiva 1 Month TECH School"}
      learn={"Learn More Than 20 Technology Tools to unlock your career potential. Gain the confidence and skills needed to thrive in any business environment"}
      view={"View Programs"}
     />
      </div>

    </div>

   </div>

   <div className='bestLearn'>
     <div className='bestLearnWrap' data-aos="fade-up" 
  data-aos-delay="200"
  data-aos-duration="300"
  data-aos-easing="ease">
      <h1>Experience Lifelong Learning <br />with Utiva Bootcamps</h1>
     </div>
   </div>

   <div className='grids'>
     <div className='grids-wrap'>
      <BootImg
      bgImage={School1} 
      Iam={"I am interested in"}
      spandata={"Data "}
      spannumber={"numbers "}
      and={" and "}
      viewcourse={"View Courses"}
      bgcolors={"#050794"}      
      />
      <BootImg
      bgImage={School2} 
      Iam={"I am interested in"}
      spandata={"Design "}
      spannumber={"creatives "}
      and={" and "}
      viewcourse={"View Courses"}
      bgcolors={"#0C8F54"} 
      />
      <BootImg
      bgImage={School3} 
      Iam={"I am interested in"}
      spandata={"Products "}
      viewcourse={"View Courses"}
      bgcolors={"#7C01A7"}
      />
      <BootImg
      bgImage={School4} 
      Iam={"I am interested in"}
      spandata={"Business Analysis "}
      viewcourse={"View Courses"}
      bgcolors={"#a78700"}      
      />
      <BootImg
      bgImage={School5} 
      Iam={"I am interested in"}
      spandata={"Programming "}
      viewcourse={"View Courses"}
      bgcolors={"#a74546"}      
      />
      <BootImg
      bgImage={School6} 
      Iam={"I am interested in"}
      spandata={"Cloud Development "}
      viewcourse={"View Courses"}
      bgcolors={"#0e8f8f"}      
      />
      <BootImg
      bgImage={School7} 
      Iam={"I am interested in"}
      spandata={"Product Marketting "}
      viewcourse={"View Courses"}
      bgcolors={"#10a662"}      
      />      
      <BootImg
      bgImage={School8} 
      Iam={"I am interested in"}
      spandata={"Technology Sales "}
      viewcourse={"View Courses"}
      bgcolors={"#000ff4"}      
      />
      <BootImg
      bgImage={School3} 
      Iam={"I am interested in"}
      spandata={"CyberSecurity "}
      viewcourse={"View Courses"}
      bgcolors={"#a78700"}      
      />
<BootImg
      bgImage={School5} 
      Iam={"I am interested in"}
      spandata={"Hr Analytics "}
      viewcourse={"View Courses"}
      bgcolors={"#000ff4"}      
      />      
     </div>
   </div>

   <div className='alumini'>

    <div className='aluminiWrap'>

      <div className='aWStories' data-aos="fade-up" 
  data-aos-delay="200"
  data-aos-duration="300"
  data-aos-easing="ease">
      <h1>Our Alumni <span className='stories'>Stories</span></h1>
      <div className=' vstories'>
       <p>View Stories</p>
        <span class="material-symbols-outlined arForwards">arrow_forward </span> 
       </div>

      </div>
             
             
             
            <div className='multiImages-div'>
        <ViewStories  
        Images={victoria}
        pftext={"Mayowa Adeojo"}
        pstext={"Product Manager"}
        imgtwo={landway}
        />

        <ViewStories  
        Images={ugo}
        pftext={"Mayowa Adeojo"}
        pstext={"Product Manager"}
        imgtwo={landway}
        />


       <ViewStories  
        Images={falodun}
        pftext={"Mayowa Adeojo"}
        pstext={"Product Manager"}
        imgtwo={landway}
        />

        <ViewStories  
        Images={ini}
        pftext={"Mayowa Adeojo"}
        pstext={"Product Manager"}
        imgtwo={landway}
        />
       </div>

    </div>


   </div>
    </>
  )
}

export default Hero;
