import React from 'react';

const CourseSection = props => (
    <section className='courseSection flex w-100 bg-gray' style={{minWidth:'400px'}}>
      <div className='courseImgWrapper pa4'>
        <img src='http://placekitten.com/g/500/300' className='courseImg'></img>
      </div>
      <div className='spacer' style={{flex:'1'}}></div>
      <div className='courseContent' style={{minWidth:'200px', marginRight:'6em'}}>
        <h1 className='mt4'>Get the Scoop on ES2020!</h1>
        <p style={{width:'30%'}}> lorem ipsum blah blah blahlah blah lorem ipsum ipsum lorem </p>
        <button className='mt5'>Buy Now!</button>
      </div>
  </section>
)

export default CourseSection;