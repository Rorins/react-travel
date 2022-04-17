import React from "react";

export default function Card(props){
    return(
        <div className="card">

            <div className="image-box">
            <img src={require(`../images/${props.element.img}`)} />
            </div>

            <div className="about">
            <div class="d-flex">
            <h3 class="country">{props.element.countryName.toUpperCase()}</h3>
            <span><a href="">View on Google Maps</a></span>
            </div>

            <h1>{props.element.place}</h1>
            <h3>{props.element.date}</h3>
            <p>{props.element.description}</p>
            </div>
        </div>
    )
}