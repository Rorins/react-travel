import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <img src={`../images/${props.element.img}`} />
            <div className="about">
            <h3>{props.element.countryName}</h3>
            <h1>{props.element.place}</h1>
            <p>{props.element.date}</p>
            <p>{props.element.description}</p>
            </div>
        </div>
    )
}