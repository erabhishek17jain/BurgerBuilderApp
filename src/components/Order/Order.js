import React from 'react';
import './Order.css'
const order = ( props ) => {
    const ingredients = [];
    
    for ( let ingredientName in props.ingredients ) {
        ingredients.push(
            {
                name: ingredientName,
                quantity: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span 
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '4px 8px',
                border: '1px solid #ccc',
                padding: '5px'
                }}
            key={ig.name}>{ig.name} ({ig.quantity})</span>;
    });

    return (
        <div className="order"> 
            <p>Ingredients:</p>
            <p>{ingredientOutput}</p>
            <p>Price (INR): <strong>{Number.parseFloat( props.price ).toFixed( 2 )}</strong></p>
        </div>
    );
};

export default order;