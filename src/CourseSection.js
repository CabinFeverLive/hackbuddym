import React from 'react';

const CourseSection = props => (
    <section className='courseSection flex w-100 bg-gray'>
      <div className='courseImgWrapper'>
        <img src='http://placekitten.com/g/400/400' className='courseImg pa4'></img>
      </div>
      <div className='spacer' style={{flex:'1'}}></div>
      <div className='courseContent'>
        <h1>Get the Scoop on ES2020!</h1>
        <p> lorem ipsum blah blah blahlah blah lorem ipsum ipsum lorem </p>
        <button>Buy Now!</button>
      </div>
  </section>
)

export default CourseSection;