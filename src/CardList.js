import React, { Component } from "react";
import Card from "./Card";
import './CardList.css';

const CardList = ({ robots }) => {
  return (
    <div className="cardsList">

    {
    robots.map((robot, index) => {
      return (
        <Card 
        key={robots[index].id} 
        id={robots[index].id} 
        name={robots[index].name} 
        email={robots[index].email}
        />
        );
      })
    }

  </div>
  );
};

export default CardList;