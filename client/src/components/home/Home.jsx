import { useEffect, useState } from "react"
import Game from "../game/Game";

export default function Home(){

  const[game,setGame] = useState([]);


  useEffect(()=>{
    fetch('http://localhost:3030/jsonstore/games')
    .then(res=>res.json())
    .then(data=>{
      let info = Object.values(data)
      .sort((a,b)=>b._createdOn-a._createdOn)
      .slice(0,3)
    
      setGame(info)
    })
    .catch(()=>{
      console('fetch catalog request error')
    })
  },[])


    return (
       <section id="welcome-world">
    <div className="welcome-message">
      <h2>ALL new games are</h2>
      <h3>Only in </h3>
      <img id="logo-left" src="./images/logo.png" alt="logo" />
    </div>
    <div id="home-page">
      <h1>Latest Games</h1>
      <div id="latest-wrap">
        {/* Display div: with information about every game (if any) */}
        <div className="home-container">
         
         {game.map(game=><Game key={game._id} {...game}/>)}
         
        </div>
      </div>
    </div>
  </section>
    )

}