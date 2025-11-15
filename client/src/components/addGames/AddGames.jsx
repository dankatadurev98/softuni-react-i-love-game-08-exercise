import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function AddGame(){

    let redirect = useNavigate()


    function onSubmit(event){
        event.preventDefault()

        let info = new FormData(event.target);

        let finalData = Object.fromEntries(info)

        
            fetch('http://localhost:3030/jsonstore/games',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(finalData)
            })

            redirect('/')
        
    }

    return (
        <>
  {/* add Page ( Only for logged-in users ) */}
  <section id="add-page">
    <form id="add-new-game" onSubmit={onSubmit}>
      <div className="container">
        <h1>Add New Game</h1>
        <div className="form-group-half">
          <label htmlFor="title">Game Name:</label>
          <input
            type="text"
            id="gameName"
            name="title"
            placeholder="Enter game title..."
          />
        </div>
        <div className="form-group-half">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            name="genre"
            placeholder="Enter game genre..."
          />
        </div>
        <div className="form-group-half">
          <label htmlFor="players">Active Players:</label>
          <input
            type="number"
            id="activePlayers"
            name="players"
            min={0}
            placeholder={0}
          />
        </div>
        <div className="form-group-half">
          <label htmlFor="date">Release Date:</label>
          <input type="date" id="releaseDate" name="date" />
        </div>
        <div className="form-group-full">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Enter image URL..."
          />
        </div>
        <div className="form-group-full">
          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            id="summary"
            rows={5}
            placeholder="Write a brief summary..."
            defaultValue={""}
          />
        </div>
        <input className="btn submit" type="submit" defaultValue="ADD GAME" />
      </div>
    </form>
  </section>
</>

    )
}