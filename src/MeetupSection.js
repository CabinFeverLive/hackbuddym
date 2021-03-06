import React from 'react';
import ReactSiema from 'react-siema';


const MeetupSection = props => (
  <section className='meetupSection flex' style={{minWidth:'750px'}}>
    <div className="meetupLeft w-75" style={{paddingRight:'2em'}}>
      <h1>Upcoming Meetups</h1>
      
      <ReactSiema>
        <div> <img src='http://placekitten.com/g/725/350' alt='gray kitten'/></div>
        <div> <img src='http://placekitten.com/g/725/350' alt=''/></div>
        <div> <img src='http://placekitten.com/g/725/350' alt=''/></div>
        <div> <img src='http://placekitten.com/g/725/350' alt=''/></div>
      </ReactSiema>
    </div>

    

    <div className='meetupRight w-25' style={{marginTop:'2.9em', minWidth:'200px'}}>
       <div >
          <h1>Intro to Javascript Promises - Nim Grinvald</h1>
          <p> This presentation will cover what Promise objects are in Javascript and why they're important, by giving a background in synchronous and asynhronous processing. We will discuss callbacks and Promise methods and demo on how to implement a Promise setup when setting up cloud database data retrieval APIs.
          </p>
        </div>  
      <button style={{marginTop:'.7em', margin:'0 auto'}}>RSVP</button>
    </div>
    
  </section>
)



export default MeetupSection;