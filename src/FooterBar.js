import React from 'react';
import './FooterBar.css'
import SubSponsorSection from './SubSponsorSection';

const FooterBar = props => (
    <section className='flex bg-skyblue' style={{marginTop:'1px solid black'}}>
      <div style={{opacity:'.75'}} className='footerContent Left'>
          <h1>hackbuddy</h1>
          <p>Lorem, ipsum dolor sit amet <br></br>consectetur</p>
          <p> adipisicing elit. Repellat</p>
      </div>

      <div className='spacer' style={{flex:'1'}}></div>

      <div style={{opacity:'.75'}} className='footerContent Right'>
          < SubSponsorSection style={{display:'flex', justifyContent:'space-between', width:'50px', height:'10px',}} logos={[1,2,3,4,5,6]} />
        <p className='footerContentRight'>Footer Words</p>
        <div style={{display:'flex'}}>
          <input style={{backgroundColor:'white', width:'8em', height:'1.1em', opacity:'1'}} type='text'></input>
          <button style={{backgroundColor:'white', width:'1em', height:'.2em'}}></button>
        </div>
      </div>
  </section>
)

export default FooterBar;