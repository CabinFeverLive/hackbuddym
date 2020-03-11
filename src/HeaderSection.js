import React from 'react';
import './HeaderSection.css'

const HeaderSection = props => (
    <section className="headerSection" style={{height:'275px'}}>
    <img className="headerImgBackground"/>
    <img className="headerImgOverlay"/>
    <p className='headerContent 1'>Become a Smarter Programmer</p>
    
    <p className='headerContent 2'>Meetup, Events, Workshops
      in Los Angeles, Orange County and Online via the Web
    </p>
    <button className='headerButton 1'>LEARN MORE</button>
    <button className='headerButton 2'>JOIN THE MAILING LIST</button>
    </section>
)

export default HeaderSection;