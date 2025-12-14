import { useEffect, useState } from "react"
import Game from "../game/Game"
import { endpoints, request } from "../../requests/request"

export default function Catalog() {

    const [games, setGames] = useState([])
    

    useEffect(() => {
        request('GET',endpoints.games,undefined,null)
            .then(data => {
                let finalData = Object.values(data)
                setGames(finalData)
            })
            .catch(() => {
                console.log(`fetch problem`)
            })

    }, [])
    return (
        <>
            <section id="catalog-page">
                <h1>Catalog</h1>



                {games.length === 0 && <h3 className="no-articles">No Added Games Yet</h3>}

                <div className="catalog-container">
                    {games.map(game => <Game key={game._id} {...game} />)}
                </div>

            </section>
        </>

    )
}