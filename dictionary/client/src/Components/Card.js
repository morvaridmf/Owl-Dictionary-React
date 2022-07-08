import React from "react";

function Card( { image, type, definition, example, emoji }) {


  return (
    <div className="card">
       <img src={image} className={image ? 'card__img' : 'card__img--hidden'} alt="" />
           <h2>{emoji}</h2>
       <div className="card__text">
           <p><span className="card__type">Type : </span> {type}</p>
           <p><span className="card__definition">Definition : </span> {definition}</p>
           <h5><span className="card__example">Example : </span> {example}</h5>
       </div>
    </div>
  );
}

export default Card;
