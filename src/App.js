import React from 'react';
import 'tachyons'
import List from './NavBar.js'
import learnSection from './LearnSection';
import HeaderSection from './HeaderSection';
import MeetupSection from './MeetupSection';
import CourseSection from './CourseSection';
import LearnSection from './LearnSection';



function App() {
  return (
    <>
    <div style={{width:'100%'}} />
      <nav>
        <ul style={{padding:'0', margin: '0'}}>
          <List />
        </ul>
      </nav>

    <section style={{textAlign:'center', marginBottom:'3em'}}>
      <HeaderSection />
    </section>

    <section style={{borderTop:'.5px solid black'}}>
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

