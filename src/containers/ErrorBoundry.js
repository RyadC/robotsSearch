import React, { Component } from "react";

// Composant qui permet d'attrapper les erreurs et de les gérer au lieu de casser l'application et de ne plus rien afficher. Il faut placer ce composant là où on pense qu'une erreur peut survenir
class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  };


  componentDidCatch(error, info) {
    this.setState({hasError: true});
  };

  render() {
    if(this.state.hasError){
      return <h1>Aïe ! Une erreur est survenue.</h1>
    } else {
      return this.props.children;
    }
  }
};

export default ErrorBoundry;