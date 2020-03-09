import React from 'react';
import ReactSiema from 'react-siema';


const MeetupSection = props => (
  <section className='meetupSection flex'>
    <div className="meetupLeft w-75">
      <h1>Upcoming Meetups</h1>
      
      <ReactSiema>
        <div> <img src='http://placekitten.com/g/500/200' alt='gray kitten'/></div>
        <div> <img src='http://placekitten.com/g/500/200' alt=''/></div>
        <div> <img src='http://placekitten.com/g/500/200' alt=''/></div>
        <div> <img src='http://placekitten.com/g/500/200' alt=''/></div>
      </ReactSiema>
    </div>

    

    <div className='meetupRight w-25'>
      <h1>Intro to Javascript Promises - Nim Grinvald</h1>
      <p> This presentation will cover what Promise objects are in Javascript and why they're important, by giving a background in synchronous and asynhronous processing. We will discuss callbacks and Promise methods and demo on how to implement a Promise setup when setting up cloud database data retrieval APIs.
      </p>
      <button>RSVP</button>
    </div>
    
  </section>
)



export default MeetupSection;