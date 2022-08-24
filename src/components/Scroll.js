import React from "react";

const Scroll = (props) => {
  return (
    // On démontre ici qu'on peut mettre des styles directement comme ca en dehors d'un fichier css mais le mieux est le fichier css
    // On ajoute aussi une div mais le mieux est de ne pas ajouter car ca ne respecte pas la sémantique
    <div style={{overflowY: 'scroll', height: '800px'}}>
      {props.children}
    </div>
  )
}


export default Scroll;