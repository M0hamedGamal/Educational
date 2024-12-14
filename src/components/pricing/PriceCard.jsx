import React from 'react';
import {price} from "../../dummydata.jsx";

function PriceCard(props) {
    return (
        <>
            {price.map((val, i) => (
                <div className='items shadow' key={i}>
                    <h4>{val.name}</h4>
                    <h1>
                        <span> $ </span>
                        {val.price}
                    </h1>
                    <p>{val.desc}</p>
                    <button className='outline-btn'>GET STARTED</button>
                </div>
            ))}
        </>
    );
}

export default PriceCard;