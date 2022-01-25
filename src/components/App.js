import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  const BASE_URL = `http://localhost:3001/toys`
  
  useEffect(() => {
    fetch(BASE_URL)
      .then(resp => resp.json())
      .then(toysData => setToys(toysData))
  }, [BASE_URL])

  const handleClick = () => {
    setShowForm((showForm) => !showForm);
  }

  const handleNewToy = (newToy) => {
    setToys([...toys, newToy])
  }

  const handleDonateToy = (deletedToy) => {
    const updatedToys = toys.filter(toy => toy.id !== deletedToy.id)
    setToys(updatedToys)
  }

  const handleUpdateToy = (updatedToy) => {
    const updatedToys = toys.map(toy => toy.id === updatedToy.id ? updatedToy : toy)
    console.log(updatedToys)
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm BASE_URL={ BASE_URL } onHandleNewToy={ handleNewToy }/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={ toys } 
        BASE_URL={ BASE_URL } 
        onUpdateToy={ handleUpdateToy } 
        onHandleDonate={ handleDonateToy }/>
    </>
  );
}

export default App;
