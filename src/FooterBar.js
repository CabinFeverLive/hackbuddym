import React from 'react';

const FooterBar = props => (
    <section className='flex bg-skyblue' style={{marginTop:'1px solid black'}}>
      <div className='footerContent Left'>
          <p>HackBuddy</p>
      </div>

      <div className='spacer' style={{flex:'1'}}></div>

      <div className='footerContent Right'>
        <p>Footer Words</p>
        <p> Email</p>
      </div>
  </section>
)

export default FooterBar;