import React from 'react';
import './HeaderSection.css'

const HeaderSection = props => (
    <section className="headerSection" style={{height:'275px'}}>
    <img className="headerImgBackground"/>
    <img className="headerImgOverlay"/>
    <p className='headerContent 1'>Become a Smarter Programmer</p>
    
    <p className='headerContent 2'>Meetup, Events, Workshops <br></br>
      in Los Angeles, Orange County and Online via the Web
    </p>
    <button style={{paddingLeft:'6em', paddingRight:'6em'}} className='headerButton_1 mt5 '>LEARN MORE</button>
    <button style={{paddingLeft:'3em', paddingRight:'3em'}} className='headerButton_2 ml3 '>JOIN THE MAILING LIST</button>
    </section>
)

export default HeaderSection;