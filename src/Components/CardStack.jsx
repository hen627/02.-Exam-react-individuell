import React from "react";
import '../Styling/CardStack.css'
// import { Link }  from "react-router-dom"
import Card from "../Components/Card.jsx"
import BTC from '../assets/vendor-bitcoin.svg'


export default function CardStack(props){
    const { cards, onCardSelect } = props;

        const Stack = cards.map(x => {
            return <Card
            key = {x.id}
            vendor = {x.vendor}
            number = {x.number}
            name = {x.name}
            date = {x.date}
            onClick={() => onCardSelect(x)}
            />
        })

        return (
            <div className="CardStack">
                {Stack}
            </div>
        )
}
