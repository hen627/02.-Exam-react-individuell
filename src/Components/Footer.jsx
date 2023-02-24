import React from "react";
import { Link }  from "react-router-dom"
import '../Styling/Footer.css'

export default function Footer(props){
    return(
        <footer>
        <Link to={props.link}>
            <button className="Footer--Button">{props.buttonText}</button>
        </Link>        
        </footer>
        )
}