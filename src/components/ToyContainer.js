import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, BASE_URL, onHandleDonate, onUpdateToy }) {

  const toysDisplay = toys.map(toy => <ToyCard key={ toy.id} toy={ toy } BASE_URL={ BASE_URL } onHandleDonate={ onHandleDonate } onUpdateToy={ onUpdateToy }/>)

  return (
    <div id="toy-collection">{ toysDisplay }</div>
  );
}

export default ToyContainer;
