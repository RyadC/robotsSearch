import React, { Component } from "react";
import Card from "./Card";
import './CardList.css';

const CardList = ({ robots }) => {
  // Le if ci dessous permet d'illustrer le cas d'une erreur gérer par le composant parent ErrorBoundry
  // if(true){
  //   throw new Error('Erreur')
  // }
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