import React from 'react'
import '../Styling/Header.css'

export default function Header(props){
    return(
        <header>
            <h1>{props.Title}</h1>
            <p>{props.subTitle}</p>
        </header>
    )
}