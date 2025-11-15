import { Link } from "react-router"
export default function Games({
  _id,
  title,
  genre,
  date,
imageUrl,
summary,
_createdOn,

}){
    return(
      <div className="game">
        <img src={imageUrl} alt="The Witcher 3" />
        <div className="details-overlay">
          <p className="name">{title}</p>
          <p className="genre">{genre}</p>
          <Link to={`/games/${_id}/details`} className="details-button" >
            Details
          </Link>
        </div>
      </div>
    )
}