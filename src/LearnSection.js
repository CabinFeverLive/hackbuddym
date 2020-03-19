import React from 'react';
import './LearnSection.css'

function Card(props){
  return(
    <div className='' style={{padding:'1.5em', height:'200px', maxWidth:'200px', margin:'0 auto', background: 'linear-gradient(to bottom, #f44e5c, #ca6dde, #0cc2ea)'}}></div>
    //{props.cardTitle} for specific Card titles
  )
}

function CardList(props){
  return props.cards.map((card) => <div style={{marginBottom:'2em'}} className='w-30 ma1'><Card /></div>) 
}

const LearnSection = ({title, cards}) => (
    <section className='learnSection'>

      <h1 className='learnHeader tc mt3'>{title}</h1>

        <div className='flex flex-wrap justify-around cardListMain' style={{minWidth:'600px'}}>
          <CardList cards={cards} />
        </div>
      
      </section>
)

export default LearnSection;