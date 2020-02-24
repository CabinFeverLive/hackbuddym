import React from 'react';

const MeetupSection = props => (
    <section className='meetupSection'>
    <div className="meetupLeft">
      <h1>Upcoming Meetups</h1>
      <img></img>
    </div>

    <div className='meetupRight'>
      <h1>Intro to Javascript Promises - Nim Grinvald</h1>
      <p> This presentation will cover what Promise objects are in Javascript and why they're important, by giving a background in synchronous and asynhronous processing. We will discuss callbacks and Promise methods and demo on how to implement a Promise setup when setting up cloud database data retrieval APIs.
      </p>
      <button>RSVP</button>
    </div>
    
  </section>
)

export default MeetupSection;