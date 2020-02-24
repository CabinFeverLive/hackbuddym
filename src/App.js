import React from 'react';
import 'tachyons'
import './navBar.css'
import List from './NavBar.js'
import './headerSection.css'

import './meetupSection.css'

import './courseSection.css'

import './learnSection.css'
import learnSection from './LearnSection';
import HeaderSection from './HeaderSection';
import MeetupSection from './MeetupSection';
import CourseSection from './CourseSection';
import LearnSection from './LearnSection';



function App() {
  return (
    <>
      <nav>
        <ul>
          <List />
        </ul>
      </nav>

    <section>
      <HeaderSection />
    </section>

    <section>
      <MeetupSection />
    </section>

     <section>
       <CourseSection />
     </section>

      <section>
        <LearnSection />
      </section>

      
    </>
  );
}

export default App;

