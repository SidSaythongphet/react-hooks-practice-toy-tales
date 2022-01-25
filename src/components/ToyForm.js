import React, { useState } from "react";

function ToyForm({ BASE_URL, onHandleNewToy }) {
  const [newToyData, setNewToyData] = useState({
    name: "",
    image: "",
    likes: 0
  })

  const handleChange = (e) => {
    setNewToyData({
      ...newToyData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newToyData)
    })
      .then(resp => resp.json())
      .then(newToy => {
        onHandleNewToy(newToy)
        e.target.reset()
      })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={ handleSubmit }>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={ handleChange }
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={ handleChange }
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
