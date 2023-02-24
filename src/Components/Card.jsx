import React from "react";
import '../Styling/Card.css'
import ChipL from '../assets/chip-dark.svg'
import BTC from '../assets/vendor-bitcoin.svg'
import NINJA from '../assets/vendor-ninja.svg'
import BLOCK from '../assets/vendor-blockchain.svg'
import EVIL from '../assets/vendor-evil.svg'

export default function Card(props) {

    let imagSelect;
    if (props.vendor === "BTC") {
        imagSelect = <img src={BTC} className="BTC"/>
    }
    else if (props.vendor === "EVIL") {
        imagSelect =  <img src={NINJA} className="NINJA"/>
    }
    else if (props.vendor === "BLOCK") {
        imagSelect = <img src={BLOCK} className="BLOCK"/>
    }
    else if (props.vendor === "NINJA") {
        imagSelect = <img src={EVIL} className="EVIL"/>
    }

    let colorSelect;
    if (props.vendor === "BTC") {
        colorSelect = "GradientBTC";
    }
    else if (props.vendor === "EVIL") {
        colorSelect = "GradientEVIL";
    }
    else if (props.vendor === "BLOCK") {
        colorSelect = "GradientBLOCK";
    }
    else if (props.vendor === "NINJA") {
        colorSelect = "GradientNINJA";
    }
    else {
        colorSelect = "GradientDefault";
    }

    const handleClick = () => {
        if (props.onClick) {
            props.onClick();
        }
    }

    return(
        <div className="Card" id={colorSelect} onClick={handleClick}>
            <img src={ChipL} className="Chip"/>
            {imagSelect}
            <h2 className="Card--Number">{props.number}</h2>
            <p className="Card--Holder">CARDHOLDER NAME</p>
            <p className="Card--Valid">VALID THRU</p>
            <p className="Card--Name">{props.name}</p>
            <p className="Card--Date">{props.date}</p>
        </div>
    )
}