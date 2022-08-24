import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';
import ErrorBoundry from "./ErrorBoundry";

class App extends Component {

  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: '',
    };
  };

  // Se déclenche une fois que render() est été appelé. Meilleur endriot pour faire des appel API
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  };

  // Je dois toujours mettre une fonction fléchée lorsque j'utilise le mot 'this' car je veux que 'this' se réfère à l'objet 'App' mais si je n'utilise pas une fonction fléchée alors 'this' va se réfèrer à l'objet qui appelle cette fonction et cette fonction est indiqué comme 'props' du composant 'SearchBox' qui est ensuite utilisé par celui-ci via la fonction 'onChange' et ce composant 'SearchBox' qui contient un élément <input> n'a pas de propriété se nommant robots. Si je veux utiliser l'objet du fichier dans lequel il est utilisé alors je dois utiliser une fonction fléchée 
  onSearchChange = (e) => {
  //  const searchRobot = e.target.value;  // Ne jamais faire ainsi, cad comme on aurait pu le faire en js normal. Il faut utiliser la methode mis en place par React
    this.setState({searchField: e.target.value});
  }

  // Dès que l'input change, sa appelle la méthode ci dessus qui change l'etat de la propriété 'searchField' avec la valeur réelle du champs. Dès que ca change un etat de l'objet 'state', React lance le cycle de vie du Update et qui a dans son cycle le render() donc il lance une nouvelle fois le render. Et dans le render on utilise la valeur de 'searchField' donc le render met à jour les Components qui comportent les éléments HTML.

  render() {
    const { robots, searchField } = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    
    // Si robots.length === 0 donc vide 
    if(!robots.length){
      return <h1 className="loading">Loading</h1>

    } else {
      
      return (
        <div className="container">
          <h1 className="title">RobotsFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <hr className="separator"></hr>
        {/* Le Scroll ci dessous est différent des autres, il a une balise fermente. Chaque composant possède dans ces props la propriété children. Je peux accéder aux éléments conten u dans le composant Scroll via props.children. En ajoutant un style à Scroll je peux réutiliser le composant Scroll sur d'autres composant pour leur donner le meme style. Cela me permet d'avoir une réutilisabilité des composants */}
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filterRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>  
      )

    }
  }
};

export default App;

