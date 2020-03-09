import React from 'react';
import 'tachyons'
import NavBar from './NavBar.js'
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
          <NavBar />
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
        <LearnSection 
          title='Learn to Code: Blog & Tutorials' 
          cards={[1,2,3,4,5,6]}
        />
      </section>

      <section>
        <LearnSection title='Check out the Shop!' 
        cards={[1,2,3]}
        />
      </section>

      
    </>
  );
}

export default App;

