import React from "react";
import Header from "../Components/Header";
import { Link } from 'react-router-dom';
import CardStack from "../Components/CardStack";
import Card from "../Components/Card";
import "../Styling/CardList.css"

export default function CardList(props) {
    const { cards, selectedCard } = props;


    var activeRender2;
    if ( selectedCard === null )
    {
      activeRender2 = ""
    }
    else {
      activeRender2 =
      <Card 
      vendor={selectedCard.vendor}
      number={selectedCard.number}
      name={selectedCard.name}
      date={selectedCard.date}
      />
    }


    return(
    <div className="AllCards">
        <Header 
        Title="ALL CARDS"
        subTitle="ACTIVE CARD"/>
        {activeRender2}
        <p className="smalltext">ALL CARDS</p>
        <p className="smalltext2">ClICK A CARD TO ACTIVATE</p>
        <CardStack cards={cards} 
        onCardSelect={props.onCardSelect}
        />
        <Link className="Link" to="/">
        <button className="Footer--Button">RETURN</button>
        </Link>
    </div>
    )
}