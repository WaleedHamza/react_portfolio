import React from "react";
import "./card.css";

const Card = props => (
<div className="card">
<div className="img-container">
<a href={props.link}>
<img alt={props.name} src={props.image}/>
</a>
<div className="projectName">
            <a href={props.link}>
                <h3>{props.name}</h3>
            </a>
        </div>  
    </div>
    </div>
);


export default Card;