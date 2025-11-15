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
          <a href="#" className="details-button">
            {summary}
          </a>
        </div>
      </div>
    )
}