import React from "react";
import "./styles.css";
import data from "./data.js";
import Card from "./components/Card";

export default function App(){
    const cards = data.map(element => {
        return(
            <Card
            key={element.id}
            element={element}
            />
        )
    })

    return(
       <main>
           {cards}
       </main>
    )
}