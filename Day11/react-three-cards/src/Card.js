import React from "react";
import "./Card.css" //import css for styling

function Card({title, content, color}){
    const alertCard = () => {
        alert(title);
    };

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const buttonColor = `rgb(${r}, ${g}, ${b})`;


    return (
        <div className="card" style={{backgroundColor: color}}>
            <h2>{title}</h2>
            <p>{content}</p>
            <button className="button" onClick={alertCard}
            style={{backgroundColor: buttonColor, color: "black"} }>
                Click Me!
            </button>
        </div>
    );
}
export default Card;