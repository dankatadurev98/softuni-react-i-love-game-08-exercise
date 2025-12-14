import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router"
import { endpoints, request } from "../../requests/request";
import { useContext } from "react";
import { authContext } from "../../context/authContext";


export default function Details() {

    let navigate = useNavigate();
    const { user } = useContext(authContext)



    const { id } = useParams();



    const [details, setDetails] = useState({})


    useEffect(() => {
        request('GET', endpoints.gamesById(id))
            .then(data => {
                setDetails(data)
            })
            .catch(() => {
                console.log(`problem with details fetch`)
                
            })
    }, [id])

    function onDeleteHanlder() {

        request('DELETE', endpoints.gamesById(id), undefined, user.accessToken)
            .then(res => {
                console.log(res);
                navigate('/catalog')

            })
            .catch(err => {
                console.log(err);

            })
    }



    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="header-and-image">
                    <img
                        className="game-img"
                        src={details.imageUrl}
                        alt="Elden Ring Cover Art"
                    />
                    <div className="meta-info">
                        <h1 className="game-name">{details.title}</h1>
                        <p className="data-row">
                            <span className="label">Genre:</span>
                            <span className="value">{details.genre}</span>
                        </p>
                        <p className="data-row">
                            <span className="label">Active Players:</span>
                            <span className="value">{details.players}</span>
                        </p>
                        <p className="data-row">
                            <span className="label">Release Date:</span>
                            <span className="value">{details.date}</span>
                        </p>
                    </div>
                    <div className="summary-section">
                        <h2>Summary:</h2>
                        <p className="text-summary">
                            {details.summary}
                        </p>
                    </div>
                </div>
                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                <div className="buttons">
                    <Link to={`/games/${id}/edit`} className="button">
                        Edit
                    </Link>
                    <button className="button" onClick={onDeleteHanlder}>Delete</button>

                </div>
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <li className="comment">
                            <p>
                                Content: A masterpiece of world design, though the boss fights are
                                brutal.
                            </p>
                        </li>
                        <li className="comment">
                            <p>
                                Content: Truly feels like a next-gen evolution of the Souls formula!
                            </p>
                        </li>
                    </ul>
                    {/* Display paragraph: If there are no games in the database */}
                    {/* <p class="no-comment">No comments.</p> */}
                </div>
            </div>
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......" defaultValue={""} />
                    <input className="btn submit" type="submit" defaultValue="Add Comment" />
                </form>
            </article>
        </section>

    )
}