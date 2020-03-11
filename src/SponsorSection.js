import React from 'react';

function Logo(props){
  return(
    <div className='w3 h3' style={{margin:'0 auto', background: 'gray'}}></div>
  )
}

function LogoList(props){
  return props.logo.map((logo) => <div className=''><Logo /></div>) 
}

const SponsorSection = ({title, logos}) => (
    <section className='sponsorSection'>

      <h1 className='sponsorHeader tc mt3'>{title}</h1>

        <div className='flex justify-around mb6'>
          <LogoList logo={logos} />
        </div>
      
      </section>
)

export default SponsorSection;