import React from 'react';
import 'tachyons'
import './navBar.css'
import './headerSection.css'
import './meetupSection.css'
import './courseSection.css'
import './learnSection.css'



function App() {
  return (
    <>
      <nav>
        <h1>HackBuddy</h1>
        <ul>
          <li> <a href='#'>About</a> </li>
          <li> <a href='#'>Meetups</a> </li>
          <li> <a href='#'>WorkShops</a> </li>
          <li> <a href='#'>Products</a> </li>
          <li> <a href='#'>Sponsors</a> </li>
          <li> <a href='#'>Blog</a> </li>
        </ul>
      </nav>

      <section className="headerSection">
        <img className="headerImgBackground"/>
        <img className="headerImgOverlay"/>
        <p className='headerContent1'>Become a Smarter Programmer</p>

        <p className='headerContent2'>Meetup, Events, Workshops
          in Los Angeles, Orange County and Online via the Web
        </p>
        <button>LEARN MORE</button>
        <button>JOIN THE MAILING LIST</button>
      </section>

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

      <section className='courseSection'>
        <div className='courseImgWrapper'>
        <img className='courseImg'></img>
        </div>
        <div className='courseContent'>
        <h1>Get the Scoop on ES2020!</h1>
        <p> lorem ipsum blah blah blahlah blah lorem ipsum ipsum lorem </p>
        <button></button>
        </div>
      </section>

      <section className='learnSection'>

        <h1 className='learnHeader'>Learn to Code: Blogs and Tutorials</h1>

        <div className='wrapper'>
        <div>one</div>
        <div>two</div>
        <div>three</div>
        <div>four</div>
        <div>five</div>
        <div>six</div>
        </div>
      </section>

      <section />
    </>
  );
}

export default App;

