import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      robots: robots,
      searchField: '',
    };
  };



  // Je dois toujours mettre une fonction fléchée lorsque j'utilise le mot 'this' car je veux que 'this' se réfère à l'objet 'App' mais si je n'utilise pas une fonction fléchée alors 'this' va se réfèrer à l'objet qui appelle cette fonction et cette fonction est indiqué comme 'props' du composant 'SearchBox' qui est ensuite utilisé par celui-ci via la fonction 'onChange' et ce composant 'SearchBox' qui contient un élément <input> n'a pas de propriété se nommant robots. Si je veux utiliser l'objet du fichier dans lequel il est utilisé alors je dois utiliser une fonction fléchée 
  onSearchChange = (e) => {
  //  const searchRobot = e.target.value;  // Ne jamais faire ainsi, cad comme on aurait pu le faire en js normal. Il faut utiliser la methode mis en place par React
    this.setState({searchField: e.target.value});
  }

  // Dès que l'input change, sa appelle la méthode ci dessus qui change l'etat de la propriété 'searchField' avec la valeur réelle du champs. Dès que ca change un etat de l'objet 'state', React lance le render. Et dans le render on utilise la valeur de 'searchField' donc le render met à jour les Components qui comportent les éléments HTML.

  render() {
    const filterRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="container">
        <h1 className="title">RobotsFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <hr className="separator"></hr>
        <CardList robots={filterRobots} />
      </div>  
    )
  }
};

export default App;

