import React from 'react';
import 'tachyons'
import NavBar from './NavBar.js'
import learnSection from './LearnSection';
import HeaderSection from './HeaderSection';
import MeetupSection from './MeetupSection';
import CourseSection from './CourseSection';
import LearnSection from './LearnSection';
import FooterBar from './FooterBar.js';
import SponsorSection from './SponsorSection.js';
import './App.css'


function App() {
  return (
    <>
      <main className='main'>
        <div style={{width:'100%'}} />
          <nav>
            <ul style={{padding:'0', margin: '0'}}>
              <NavBar />
            </ul>
          </nav>

        <section style={{textAlign:'center', marginBottom:'3em'}}>
          <HeaderSection />
        </section>

        <section style={{paddingLeft:'6em',paddingRight:'6em', marginBottom:'3em'}}>
          <MeetupSection />
        </section>

        <section>
          <CourseSection />
        </section>

          <section className='mt6'>
            <LearnSection 
              title='Learn to Code: Blog & Tutorials' 
              cards={[1,2,3,4,5,6]}
            />
          </section>

          <section style={{marginTop:'6em'}}>
            <LearnSection 
              title='Check Out The Shop!' 
              cards={[1,2,3]}
            />
          </section>

          <section style={{borderBottom: '1px solid gray', marginTop:'5em'}}>
            <SponsorSection 
              title='Thank You To The Following Sponsors!'
              logos={[1,2,3,4,5]}
            />
          </section>

          <section className='footer pr4 pl4' style={{height:'350px', width:'100%'}}>
            <FooterBar />
          </section>
       </main>
    </>
  );
}

export default App;

