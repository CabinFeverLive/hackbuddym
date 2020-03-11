import React from 'react';

function Logo(props){
  return(
    <div className='w1 h1' style={{margin:'0 auto', background: 'white'}}></div>
  )
}

function LogoList(props){
  return props.logo.map((logo) => <div className=''><Logo /></div>) 
}

const SubSponsorSection = ({title, logos}) => (
    <section className='sponsorSection'>

      <h1 className='sponsorHeader tc mt3'>{title}</h1>

        <div className='flex justify-around'>
          <LogoList logo={logos} />
        </div>
      
      </section>
)

export default SubSponsorSection;