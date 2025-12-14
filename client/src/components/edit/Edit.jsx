import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { endpoints, request } from "../../requests/request";
import { useContext } from "react";
import { authContext } from "../../context/authContext";

export default function Edit() {

    let { id } = useParams();
    const {user} = useContext(authContext)
    const navigate = useNavigate();
   

    const [game, setGame] = useState(null)

    useEffect(() => {
        request('GET',endpoints.gamesById(id))
            .then(data => setGame(data));
    }, [id]);


    function onSubmitForm(formData){

        let finalData = Object.fromEntries(formData);
        
        request("PUT",endpoints.gamesById(id),finalData,user.accessToken)
        .then(res=>{
            navigate('/catalog')
        })
        .catch(err=>{
            console.log(err);
            
        })
        }
        
    


   




    if (!game) {
        return <p>Loading...</p>;
    }


    return (
        <section id="edit-page">
            <form id="add-new-game" action={onSubmitForm}>
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