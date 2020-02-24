import React from 'react';

const HeaderSection = props => (
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
)

export default HeaderSection;