import React from "react";

function ToyCard({ toy, BASE_URL, onHandleDonate, onUpdateToy }) {
  const { id, name, image, likes } = toy

  const handleDeleteClick = () => {
    fetch(BASE_URL + `/${toy.id}`, {
      method: "DELETE"
    })
      .then(resp => resp.json)
      .then(() => onHandleDonate(toy))
  }

  const handleLikeClick = () => {
    const updateLikes = {
      likes: toy.likes + 1
    }

    fetch(BASE_URL + `/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(updateLikes)
    })
      .then(resp => resp.json)
      .then(updatedToy => onUpdateToy(updatedToy))
  }

  return (
    <div className="card">
      <h2>{ name }</h2>
      <img
        src={ image }
        alt={ name }
        className="toy-avatar"
      />
      <p>{ likes } Likes </p>
      <button className="like-btn" onClick={ handleLikeClick }>Like {"<3"}</button>
      <button className="del-btn" onClick={ handleDeleteClick }>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
