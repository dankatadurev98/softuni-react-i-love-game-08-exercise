import { useEffect, useState } from "react";
import { useParams } from "react-router"

export default function Edit() {

    let { id } = useParams();
    console.log(id)

    const [game, setGame] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3030/data/games/${id}`)
            .then(res => res.json())
            .then(data => setGame(data));
    }, [id]);

   




    if (!game) {
        return <p>Loading...</p>;
    }


    return (
        <section id="edit-page">
            <form id="add-new-game">
                <div className="container">
                    <h1>Edit Game</h1>
                    <div className="form-group-half">
                        <label htmlFor="gameName">Game Name:</label>
                        <input
                            type="text"
                            id="gameName"
                            name="title"
                            defaultValue={game.title}
                            placeholder="Enter game title..."
                        />
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="genre">Genre:</label>
                        <input
                            type="text"
                            id="genre"
                            name="genre"
                            defaultValue={game.genre}
                            placeholder="Enter game genre..."
                        />
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="activePlayers">Active Players:</label>
                        <input
                            type="number"
                            id="activePlayers"
                            name="players"
                            defaultValue={game.players}
                            min={0}
                            placeholder={0}
                        />
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input type="date" id="releaseDate" name="date" defaultValue={game.date} />
                    </div>
                    <div className="form-group-full">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            defaultValue={game.imageUrl}
                            placeholder="Enter image URL..."
                        />
                    </div>
                    <div className="form-group-full">
                        <label htmlFor="summary">Summary:</label>
                        <textarea
                            name="summary"
                            defaultValue={game.summary}
                            id="summary"
                            rows={5}
                            placeholder="Write a brief summary..."

                        />
                    </div>
                    <input className="btn submit" type="submit" defaultValue="EDIT GAME" />
                </div>
            </form>
        </section>

    )
}