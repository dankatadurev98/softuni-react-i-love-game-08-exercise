import { useEffect, useState } from "react"
import Game from "../game/Game"

export default function Catalog() {

    const [games, setGames] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/games')
            .then(data => data.json())
            .then(finalData => {
                let info = Object.values(finalData)
                setGames(info)
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