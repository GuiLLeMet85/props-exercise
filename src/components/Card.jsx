import React from "react";

export default function Card(props) {
    const {name, age, isPremium, country} = props.client;
    const clientPremium = isPremium ? 'Yes': 'No'; 
    const isYes = isPremium ? 'premium': '';

    let greeting;

    switch (props.client.country) {
        case "de":
            greeting = "Hallo";
            break;
        case "en":
            greeting = "Hello";
            break;
        case "fr":
            greeting = "Bonjour";
            break;
        case "es":
            greeting = "Hola";
            break;
        default:
            greeting = "Hello";  
    }

    return (
        <div className={`card ${isYes}`}>
        <h3>{greeting} {name}</h3>
        <p>Age:{age}</p>
        <p>Is it a premium client? {clientPremium}</p>
        </div>
    )
}