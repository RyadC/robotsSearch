import React, { Component } from "react";
import './Card.css';

const Card = (props) => {
  const { id, name, email } = props;
  return(
    <div className="container">
      <div className="card">
        <img alt="robots" src={`https://robohash.org/${id}?50x50`} className="card__img"/>
        <div>
          <h2 className="card__title">{name}</h2>
          <p className="card__email">{email}</p>
        </div>
      </div>
    </div>

  )
}

export default Card;