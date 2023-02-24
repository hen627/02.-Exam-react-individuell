import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Card from '../Components/Card'
import CardStack from '../Components/CardStack'
import Footer from '../Components/Footer'
import '../Styling/CardMenu.css'



export default function CardMenu(props) {
  const { cards, selectedCard } = props;

  var activeRender;
  if ( selectedCard === null )
  {
    activeRender = 
    <Card 
    vendor=""
    number="XXXX XXXX XXXX XXXX"
    name="FIRSTNAME LASTNAME"
    date="MM/YY"
       />
  }
  else {
    activeRender =
    <Card 
    vendor={selectedCard.vendor}
    number={selectedCard.number}
    name={selectedCard.name}
    date={selectedCard.date}
    />
  }

  return (
    <div className="CardMenu">
      <Header
      Title="E-WALLET"
      subTitle="ACTIVE CARD" 
      />
      {activeRender}
      <Link to="/Cardlist" className='LinkStyle'>
        <p className='ListLink'>ALL CARDS</p>
      </Link>
      <CardStack cards={cards} />
      <Footer 
      link="/NewCard"
      buttonText="ADD A NEW CARD"/>
    </div>
  )
}